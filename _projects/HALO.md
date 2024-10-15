---
layout: page
title: HALO (Hazard-Aware Landing Optimization)
description: SciTech 2024
img: assets/img/publication_preview/hayner2023halo.png
importance: 1
category: Research
related_publications: true
---


**H**azard **A**ware **L**anding **O**ptimization (**HALO**) presents a combined perception (HALSS) and trajectory planning (Adaptive-DDTO) solution towards contingency planning for landing maneuvers with multiple candidate landing sites. This was an equal contribution research project between coauthor Chris Hayner and myself, published and presented at ICRA 2024 {% cite hayner2024halo %}, where I was primarily responsible for the Adaptive-DDTO algorithm development and implementation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/HALO/addto.png"
            caption="Visual illustration of the three-part modeling process for Adaptive-DDTO in a quadrotor landing context with multiple candidate landing sites"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>

Modeling of the Adaptive-DDTO algorithm can be decomposed into three steps:
<ol>
    <li> Definition of necessary path constraints, boundary conditions and objective for the single-target optimal control problem.</li>
    <li> Extension to a multi-target scenario with the objective to maximize the time within which all targets are reachable (known in the literature as Deferred Decision Trajectory Optimization or DDTO).</li>
    <li> Extension to Adaptive-DDTO through an algorithm to adaptively recompute solutions <i>as needed</i> (whenever number of targets falls below an acceptable threshold).</li>
</ol>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include video.liquid 
            path="https://www.youtube.com/embed/KqCXGDTntDU" 
            caption="Demonstration of the HALO framework applied to a quadrotor landing in a martian terrain environment" 
            autoplay=true muted=true loop=true controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>