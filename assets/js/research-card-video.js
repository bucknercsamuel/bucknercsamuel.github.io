(function () {
  if (window.__researchCardVideoInit) {
    return;
  }
  window.__researchCardVideoInit = true;

  function initLocalHoverControls() {
    document.querySelectorAll(".research-card-video-wrap video").forEach(function (video) {
      var wrap = video.closest(".research-card-video-wrap");
      if (!wrap || wrap.dataset.hoverControlsReady === "true") {
        return;
      }
      wrap.dataset.hoverControlsReady = "true";

      wrap.addEventListener("mouseenter", function () {
        video.setAttribute("controls", "");
      });
      wrap.addEventListener("mouseleave", function () {
        video.removeAttribute("controls");
      });
    });
  }

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

  function setupYouTubeHoverUi(container, player) {
    var wrap = container.closest(".research-card-video-wrap");
    if (!wrap) {
      return;
    }

    var ui = wrap.querySelector(".research-card-youtube-hover-ui");
    if (!ui) {
      return;
    }

    var playBtn = ui.querySelector(".research-card-yt-play");
    var seek = ui.querySelector(".research-card-yt-seek");
    if (!playBtn || !seek) {
      return;
    }

    function setPlayIcon(isPlaying) {
      playBtn.innerHTML = isPlaying
        ? '<i class="fa-solid fa-pause" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-play" aria-hidden="true"></i>';
      playBtn.setAttribute("aria-label", isPlaying ? "Pause video" : "Play video");
    }

    playBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var state = player.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        player.pauseVideo();
        setPlayIcon(false);
      } else {
        player.playVideo();
        setPlayIcon(true);
      }
    });

    seek.addEventListener("input", function () {
      var duration = player.getDuration();
      if (!duration || duration <= 0) {
        return;
      }
      player.seekTo((seek.value / 100) * duration, true);
    });

    setInterval(function () {
      if (typeof player.getDuration !== "function" || typeof player.getCurrentTime !== "function") {
        return;
      }

      var duration = player.getDuration();
      var current = player.getCurrentTime();
      if (!duration || duration <= 0) {
        return;
      }

      seek.value = String((current / duration) * 100);
      setPlayIcon(player.getPlayerState() === YT.PlayerState.PLAYING);
    }, 250);
  }

  function initYouTubePlayers() {
    var containers = document.querySelectorAll(".research-card-youtube");
    if (!containers.length) {
      return;
    }

    function createPlayers() {
      containers.forEach(function (el) {
        if (el.dataset.playerReady === "true") {
          return;
        }
        el.dataset.playerReady = "true";

        var videoId = el.dataset.videoId;
        var start = parseInt(el.dataset.start || "0", 10);
        var end = el.dataset.end ? parseInt(el.dataset.end, 10) : null;
        var height = el.dataset.height || "300";
        var isSegment = end !== null && !Number.isNaN(end);

        var playerVars = {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
        };

        if (isSegment) {
          playerVars.start = start;
          playerVars.end = end;
        } else {
          playerVars.loop = 1;
          playerVars.playlist = videoId;
        }

        var player = new YT.Player(el, {
          videoId: videoId,
          width: "100%",
          height: height,
          playerVars: playerVars,
          events: {
            onReady: function (event) {
              if (isSegment) {
                event.target.seekTo(start, true);
              }
              event.target.playVideo();
              setupYouTubeHoverUi(el, event.target);
            },
            onStateChange: function (event) {
              if (isSegment && event.data === YT.PlayerState.PLAYING && !el._segmentInterval) {
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

        el._player = player;
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
    initLocalHoverControls();
    initLocalSegmentVideos();
    initYouTubePlayers();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
