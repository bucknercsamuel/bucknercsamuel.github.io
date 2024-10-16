---
layout: page
title: ROS-Based CubeSat Flight Software
description: SmallSat 2020
img: assets/img/publication_preview/buckner2020novel.PNG
importance: 1
category: Research
related_publications: true
---

<div class="row">
    <div class="col-md mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/D3Sat/SmallSat_Poster.png"
            caption="Poster submission to the 2020 SmallSat Conference"
            loading="eager" class="img-fluid"%}
    </div>
</div>

Between the Spring of 2019 and Fall of 2020 (when I finished my undergraduate degree), I worked as the lead flight software engineer to develop the first flight-ready ROS (Robot Operating System) based flight software for the D3 CubeSat mission {% cite buckner2020novel %}. The D3 contains four deployable booms for control of aerodynamic drag to: (1) reduce orbital lifetime, (2) de-orbit point target and (3) perform collision avoidance. This software was also picked to support the PATCOOL CubeSat mission in addition to D3.

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-md-3 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/D3Sat/d3_slightly_deployed.png"
            caption="D3 Model: Partially Deployed"
            loading="eager" class="img-fluid"%}
    </div>
    <div class="col-md-3 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/D3Sat/d3_fully_deployed.png"
            caption="D3 Model: Fully Deployed"
            loading="eager" class="img-fluid"%}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>

**Main Contributions:**
<ol>
    <li> Developed software modules for radio telemetry links, GPS navigation, finite-state handling, uplink command processing, onboard software updates and failsafe reboots</li>
    <li> Created C++ orbital simulation/propagation software to simulate guidance tracker</li>
    <li> Performed guided trajectory analysis involving LQR (linear quadratic regulator) and EKF (extended Kalman filter) performance for guidance tracker validation</li>
    <li> Led team scheduling, trained new members and prepared test plans for three-layered SWIL (software-in-the-loop), HWIL (hardware-in-the-loop) and FlatSat testing</li>
</ol>

The D3 CubeSat was [successfully launched](https://www.nanosats.eu/sat/d3-cubesat) in July 2022, and performed re-entry (completing all mission requirements) in April 2023.

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-md-8 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/D3Sat/piNAV_testing.jpeg"
            caption="PiNAV GPS testing in the laboratory clean-room"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>