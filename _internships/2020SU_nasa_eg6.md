---
layout: page
title: GN&C Autonomous Flight Systems
description: NASA Johnson Space Center (Summer 2020, Pathways Program)
img: assets/media/internships/NASA_JSC_EG6/cover.png
importance: 1
category: Undergraduate
related_publications: false
---

<div class="row">
    <div class="col-md-1 mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-md mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_EG6/ROSIE.JPEG"
            caption="ROSIE Test-bed with Velodyne LiDAR sensor payload"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-md mt-3 mt-md-0">
        {% include video.liquid 
            path="assets/media/internships/NASA_JSC_EG6/ROSIE_RendezvousManeuverTest_Trimmed.mp4"
            caption="6-DOF Emulated Rendezvous Maneuver (with LiDAR cluster detection)"
            autoplay=true muted=true loop=true controls=true %}
    </div>
    <div class="col-md-1 mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>

**Overview**

For my third and final Pathways tour, I was tasked with furthering development on the ROSIE (Rendezvous Operation Sensor and Imagery Evaluator) robotic testbed. This vehicle’s purpose is to support rendezvous and docking GN&C testing and sensor performance evaluation with quick feedback and capable 6 DOF (degree of freedom) motion emulation. ROSIE is designated to help support the rapid development and testing deadlines necessary for Orion and the Artemis program’s success, as well as for any other future missions requiring precision relative orbital motion testing.

**Contributions**

During the course of my internship, I successfully:

1. Upgraded ROSIE’s C++ codebase with improved 6-DOF PID control, trajectory sequencing, sensor integration, noise filtering and a PyQt5 GUI analytic toolkit
2. Developed LiDAR collision detection and retroreflector cluster identification algorithms with PCL (Point Cloud Library) for docking relative navigation
3. Led ROSIE performance testing campaign with OptiTrack motion capture feedback and Velodyne LiDAR payload through extensive test matrix validation

<div class="row">
    <div class="col-md-6 mt-3 mt-md-0">
        <b>
            Side Project: Orion 3D Visualization Library
        </b>
        <br>
        I also worked on a side project to validate an Orion 3D cockpit graphical display C-library for lightweight CAD models. I initially developed an automated MATLAB geometric modeling tool, then used MATLAB MEX functions to interface with and test-drive the library with a highly-configurable GUI and performance diagnostics. Using these tools, I was also able to significantly refactor the C codebase, reducing computational power usage and improving display refresh speed.
        <br>
    </div>
    <div class="col-md mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_EG6/orioncockpit.jpg"
            caption="Orion Cockpit Display (project-specific images not approved for distribution)"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
</div>

<div class="row">
    <div class="col-md mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_EG6/living_room_tests.png"
            caption="Due to COVID-19, I took the initiative to set up a contained hardware performance testing environment in my living room before proceeding to on-site testing with ROSIE"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-md mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_EG6/cluster_id.jpeg"
            caption="Whiteboard retroreflector configuration for LiDAR cluster detection"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
</div>