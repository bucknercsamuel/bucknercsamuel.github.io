---
layout: page
title: CVG (Constrained Visibility Guidance)
description: SciTech 2024
img: assets/img/publication_preview/buckner2024constrained.png
importance: 1
category: Research
related_publications: true
---

**C**onstrained **V**isibility **G**uidance (**CVG**) presents a novel approach to modeling terrain scanning constraints for powered landing maneuvers using a novel *theory of constrained conic intersections*. This includes two separate levels of algorithmic fidelity:
<ol>
    <li> A high-fidelity 6-DoF (translation + rotation) model using sequential convex programming (SCP) </li>
    <li> A medium-fidelity 3-DoF (translation-only) model using lossless convexification (LCvx) </li>
</ol>

Both of these models were developed as part of my 2023 rotation at the NASA Johnson Space Center.
<br/>

### 6-DoF SCP Approach

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        The objective of CVG is to model a constraint which restricts the field of view (FOV) of a fixed perception sensor onboard a landing vehicle to obtain full coverage of a circular region of interest on the ground. Contributions of this work included:
        <ol>
            <li> Definition of a constraint set that guarantees FOV capture of this region of interest with arbitrary centroid location and radius. </li>
            <li> Introduction of a new theory of constrained conic intersections to validate the guarantees of this constraint set. </li>
            <li> Formulation of various SotA techniques in SCP modeling and optimal control catered to specification of terrain scanning events. </li>
            <li> Efficient initialization of SCP algorithms under this problem class by converting 3-DoF solutions to proximal 6-DoF solutions. </li>
        </ol>
        <br>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/CVG/CVG_illustration.png"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include video.liquid 
            path="assets\media\projects\research\cvg_demo.mp4"
            caption="CVG demo of a landing maneuver with three terrain scanning events (for three separate regions of interest)"
            autoplay=true muted=true loop=true controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>

<br/>

### 3-DoF SCP Approach