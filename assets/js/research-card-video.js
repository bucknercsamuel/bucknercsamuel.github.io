(function () {
  if (window.__researchCardVideoInit) {
    return;
  }
  window.__researchCardVideoInit = true;

  function initLocalSegmentVideos() {
    document.querySelectorAll("video.research-card-segment-video").forEach(function (video) {
      var start = parseFloat(video.dataset.segmentStart || "0");
      var end = parseFloat(video.dataset.segmentEnd);
      if (Number.isNaN(end)) {
        return;
      }

      function seekToStart() {
        video.currentTime = start;
      }

      video.addEventListener("loadedmetadata", seekToStart);
      video.addEventListener("timeupdate", function () {
        if (video.currentTime >= end - 0.05) {
          seekToStart();
        }
      });
    });
  }

  function initYouTubeSegmentPlayers() {
    var containers = document.querySelectorAll(".research-card-youtube-segment");
    if (!containers.length) {
      return;
    }

    function createPlayers() {
      containers.forEach(function (el) {
        if (el.dataset.playerReady === "true") {
          return;
        }
        el.dataset.playerReady = "true";

        var start = parseInt(el.dataset.start || "0", 10);
        var end = parseInt(el.dataset.end, 10);
        var controls = parseInt(el.dataset.controls || "1", 10);

        new YT.Player(el, {
          videoId: el.dataset.videoId,
          width: "100%",
          height: el.dataset.height || "300",
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: controls,
            start: start,
            end: end,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
          },
          events: {
            onReady: function (event) {
              event.target.seekTo(start, true);
              event.target.playVideo();
            },
            onStateChange: function (event) {
              if (event.data === YT.PlayerState.PLAYING && !el._segmentInterval) {
                el._segmentInterval = setInterval(function () {
                  var currentTime = event.target.getCurrentTime();
                  if (currentTime >= end - 0.15) {
                    event.target.seekTo(start, true);
                  }
                }, 100);
              }
            },
          },
        });
      });
    }

    if (window.YT && window.YT.Player) {
      createPlayers();
      return;
    }

    var previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof previousReady === "function") {
        previousReady();
      }
      createPlayers();
    };

    if (!document.getElementById("youtube-iframe-api")) {
      var tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  }

  function init() {
    initLocalSegmentVideos();
    initYouTubeSegmentPlayers();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
