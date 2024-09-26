---
layout: page
title: Lunar Lander Trajectory Simulation
description: NASA Johnson Space Center (Spring 2020, Pathways Program)
img: assets/media/internships/NASA_JSC_CM451/cover.png
importance: 1
category: Undergraduate
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_CM451/SimSnip_crop2.png"
            caption="Graphical display for the lunar ascent prototype simulation in collaboration with JPL"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
</div>

**Overview**

For my second Pathways tour, I worked with the COMPASS (Core Operations, Mission Planning and Analysis Spacecraft Simulation) software team in collaboration with the JPL DARTS Laboratory. This group helps develop safety-critical software for flight operations analysis in the ascent and EDL (entry, descent and landing) flight regimes and was recently selected for 2020 Software of the Year at Johnson Space Center.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <b>
            Contributions
        </b>
        \n
        My primary task was to develop, analyze, test and SVN deploy a lunar lander ascent-phase simulation from scratch to support HLS (Human Landing System) development for the Artemis program, complete with the following features:
        <ol>
            <li> A custom LTG (linear tangent guidance) steering law to orbital insertion </li>
            <li> High-fidelity sensor/actuator models and spatial frame management </li>
            <li> Accurate vehicle mass characteristics and propulsion configuration </li>
            <li> New tools for orbital insertion and propagation simulation and analysis </li>
        </ol>
        Furthermore, I assisted with development of custom graphics and visualization libraries suited for the software limitations that the COMPASS team had to deal with. As a side task, I also helped develop an IIP (instantaneous impact point) trajectory propagation tool to support vehicle ascent analysis for the FDO flight control team. More information on COMPASS can be found here.
        \n
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_CM451/TOPO_snip.PNG"
            caption="On-console training opportunity with an active ISS TOPO flight controller"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
</div>

<div class="row">
    <div class="col-sm-1 mt-3 mt-md-0">
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_CM451/JPL2.png"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_CM451/DARTS.jpg"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-sm-1 mt-3 mt-md-0">
    </div>
</div>


**Contributions**

I conducted in-depth trade studies for these algorithms and their performance, relative to their predecessors, in NASA’s (Unix-based) 6-DOF Trick simulation environment, and further developed various MATLAB/C++ unit tests and debugged various problems in the simulation source code. Handoff results were used by other GN&C teams and targeted quantifiable understanding of underlying mathematical relations and their influence on the vehicle’s overall trajectory and design parameters including aerodynamic, propulsive, structural, etc.

**Timed parachute deployment** algorithms were analyzed both in controlled, independent simulations and Monte-Carlo (MC) dispersion analysis. The latter revealed potential hardware failure scenarios in off-nominal cases. Custom Python data processing and analysis tools were also developed for this task, the next task and general use in EG4.

**Linear-Optimized Control Allocation** algorithms were also analyzed, looking deep into the impact and interrelated dependencies of weighting parameters on flight performance. Numerous weight sets were fine-tuned for a variety of different use-cases. Detailed comparison across the entire flight regime was also made relative to the previous method which used a more traditional control allocation logic.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid
            path="https://www.youtube.com/embed/1_FXVjf46T8" 
            caption="SpaceX Crew Dragon – Pad Abort Test" 
            autoplay=true muted=true loop=true controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid 
            path="https://www.youtube.com/embed/mu5Ydz34oVc" 
            caption="SpaceX Crew Dragon – In-Flight Abort Test (IFA)" 
            autoplay=true muted=true loop=true controls=true %}
    </div>
</div>