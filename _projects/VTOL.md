---
layout: page
title: VTOL Hopper Vehicle
img: assets/media/projects/hobby/VTOL/model_feature.png
description: Spring 2018 - Fall 2020
importance: 1
category: Hobby
related_publications: false
---

During my undergraduate degree, I worked off-and-on on a project to develop a VTOL hopper vehicle equipped with:
<ol>
    <li> A Teensy Arduino microcontroller</li>
    <li> A propulsive EDF (Electronic Ducted Fan)</li>
    <li> An IMU (Inertial Measurement Unit)</li>
    <li> Four servo motors for nozzle actuation</li>
</ol>

<div class="row">
    <div class="col-md-7 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/hobby/VTOL/models_sw.png"
            loading="eager" class="img-fluid"%}
    </div>
    <div class="col-md-3 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/hobby/VTOL/prototype.jpg"
            caption="Test Model Hardware Prototype"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
</div>

The system is designed to be 6-DOF capable, with a gimbaled nozzle for pitch/yaw control and two fins located directly below the EDF for roll control. A four-bar linkage solution to the nozzle-servo kinematics was derived and modeled in MATLAB and fed into the C-based flight software for precise servo-to-nozzle actuation mapping. A prototype test-stand was 3D-printed and assembled to test nozzle actuation in response to IMU readings. Precise motion has been confirmed at a maximum deflection angle of 24 degrees, however further design and analysis is desired before moving to the flight-ready prototype.

<div class="row">
    <div class="col-md mt-3 mt-md-0">
        {% include video.liquid 
            path="assets/media/projects/hobby/VTOL/FourBarLinkage.mp4"
            caption="MATLAB nozzle-servo kinematic simulation"
            autoplay=true muted=true loop=true controls=true %}
    </div>
    <div class="col-md mt-3 mt-md-0">
        {% include video.liquid 
            path="assets/media/projects/hobby/VTOL/sweeptest.mp4"
            caption="Nozzle square-sweep motion demonstration"
            autoplay=true muted=true loop=true controls=true %}
    </div>
</div>

*This project is currently on hold, however I plan to return to it when I get the available time.*