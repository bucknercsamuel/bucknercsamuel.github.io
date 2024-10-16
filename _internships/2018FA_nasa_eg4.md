---
layout: page
title: Integrated GN&C Analysis
description: NASA Johnson Space Center (Fall 2018, Pathways Program)
img: assets/media/internships/NASA_JSC_EG4/cover.png
importance: 1
category: Undergraduate
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/internships/NASA_JSC_EG4/demo_thin.png"
            caption="Simulation snippet taken during Monte-Carlo outlier analysis"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
</div>

**Overview**

In the Fall of 2018, I assisted the NASA CCP (Commercial Crew Program) with integrated GN&C analysis for the SpaceX Crew Dragon. The work focused on the oncoming implementation of new GN&C algorithms for the ascent LAS (launch abort system) in early atmospheric flight.

**Contributions**

I conducted in-depth trade studies for these algorithms and their performance, relative to their predecessors, in NASA’s (Unix-based) 6-DOF Trick simulation environment, and further developed various MATLAB/C++ unit tests and debugged various problems in the simulation source code. Handoff results were used by other GN&C teams and targeted quantifiable understanding of underlying mathematical relations and their influence on the vehicle’s overall trajectory and design parameters including aerodynamic, propulsive, structural, etc.

**Timed parachute deployment** algorithms were analyzed both in controlled, independent simulations and Monte-Carlo (MC) dispersion analysis. The latter revealed potential hardware failure scenarios in off-nominal cases. Custom Python data processing and analysis tools were also developed for this task, the next task and general use in EG4.

**Linear-Optimized Control Allocation** algorithms were also analyzed, looking deep into the impact and interrelated dependencies of weighting parameters on flight performance. Numerous weight sets were fine-tuned for a variety of different use-cases. Detailed comparison across the entire flight regime was also made relative to the previous method which used a more traditional control allocation logic.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid
            path="https://www.youtube.com/embed/1_FXVjf46T8?&autoplay=1&mute=1" 
            caption="SpaceX Crew Dragon – Pad Abort Test"
            height="200" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid 
            path="https://www.youtube.com/embed/mu5Ydz34oVc?&autoplay=1&mute=1" 
            caption="SpaceX Crew Dragon – In-Flight Abort Test (IFA)"
            height="200" %}
    </div>
</div>