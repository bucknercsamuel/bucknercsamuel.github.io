---
layout: page
title: Fit2Fly Research Associate
description: NASA Langley Research Center (Summer 2019, NASA Academy Program)
img: assets/media/internships/NASA_LaRC_Academy/cover.png
importance: 1
category: Undergraduate
related_publications: false
---

<div class="row">
    <div class="col-md mt-3 mt-md-0">
        {% include figure.liquid
            path="assets/media/internships/NASA_LaRC_Academy/simulation_flow_diagram.png"
            caption="Fit2Fly Software Flow Diagram" 
            loading="eager" class="img-fluid rounded z-depth-1"  %}
    </div>
</div>

**Overview**

In the Summer of 2019, I worked with the NASA Academy, a group of 16 undergraduates assigned to collaborate on one of two major center-wide research projects: Hercules and Fit2Fly. I worked specifically with the Fit2Fly software team, with the goal of developing a proof of concept feasibility simulator from scratch to model business ecosystems for large-scale UAS (unmanned aerial system) enterprises. My specialty on our team of three regarded research on the internal core SWIL (software-in-the-loop) commercial operations simulator interfacing with ArduPilot and QGroundControl open-source software. I was also the acting liason to the hardware team ensuring our simulation work could properly translate to real-world UAS testing.

**Contributions**

I developed a multithreaded Python architecture for multi-UAS mission management consisting of uploading waypoints, performing takeoff and landing, updating flight parameters and injecting simulated weather events when desired. Real-time clock synchronization was closely managed between Fit2Fly processes and ArduPilot SWIL instantiations to ensure accurate simulation. I further developed a modified software version with rerouted TCP connections and realistic flight parameters to drive SRD-280 drones for netted flight demonstration. During research, I wrote software tools for tasks such as HTML web scraping and XML parsing/reconstruction. I went on to present the project and our research on behalf of the team at the AIAA 2020 SciTech Conference.

<div class="row">
    <div class="col-md-7 mt-3 mt-md-0">
        {% include video.liquid 
            path="assets/media/internships/NASA_LaRC_Academy/demo.mp4"
            caption="Time-lapse of simulated pizza deliveries to a local neighborhood"
            autoplay=true muted=true loop=true controls=true %}
    </div>
    <div class="col-md mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/media/internships/NASA_LaRC_Academy/aiaa_cropped.jpeg" class="img-fluid rounded z-depth-1" caption="Presenting at the 2020 AIAA Sci-Tech Conference" %}
    </div>
</div>

**Side-Task: Signal Identification**

As a side-task for Fit2Fly, I also worked on computational methods for identifying UAS vehicles based on their RF (radio frequency) FHSS (frequency hopping spread-spectrum) signal patterns. Two methods were proposed and handed off for further development.

<div class="row">
    <div class="col-md mt-3 mt-md-0">
        <b> 
            Method #1: Binary Blob Detection 
        </b>
        <br>
        This first approach saturated values to binary one or zero based on whether signal strength had exceeded a given threshold or not. Large enough clusters of ones were identified in real time as frequency hops and marked with red circles for visualization as seen in the below waterfall plot (tested on SRD-280 radio transmitters with an RF explorer spectrum analyzer). While computationally fast and efficient, this method showed possible unreliability with complex patterns and sensor noise, leading to investment in method #2.
        <br>
    </div>
    <div class="col-md mt-3 mt-md-0">
        <b> 
            Method #2: Image Classification
        </b>
        <br>
        For more robust FHSS identification, image classification (machine learning) with PyTorch was selected as a possible solution. Simulated data with random noise was developed for large data-set validation, with select augmentations used including random cropping, center cropping and resizing. A prediction accuracy of 98% was found, with a sample set shown below, although this method has yet to be implemented in real-time with the SRD-280 radio transmitters due to time constraints.
        <br>
    </div>
</div>

<div class="row">
    <div class="col-md-7 mt-3 mt-md-0">
        {% include video.liquid 
            path="assets/media/internships/NASA_LaRC_Academy/binary_blob.mp4"
            caption="Binary blob detection validation test"
            autoplay=true muted=true loop=true controls=true %}
    </div>
    <div class="col-md mt-3 mt-md-0">
        {% include figure.liquid
            path="assets/media/internships/NASA_LaRC_Academy/image_classification.png"
            caption="Image classification validation test" 
            loading="eager" class="img-fluid rounded z-depth-1" %}       
    </div>
</div>

