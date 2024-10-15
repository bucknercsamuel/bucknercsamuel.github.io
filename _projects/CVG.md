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
    <li> A high-fidelity 6-DoF (translation + rotation) model using sequential convex programming (SCP) {% cite buckner2024constrained %}</li>
    <li> A medium-fidelity 3-DoF (translation-only) model using lossless convexification (LCvx) {% cite shaffer2024implementation %}</li>
</ol>

Both of these models were developed as part of my 2023 rotation at the NASA Johnson Space Center.
<br/><br/>

### 6-DoF SCP Approach

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        The objective of CVG is to model a constraint which restricts the field of view (FOV) of an onboard perception sensor -- typically parameterized by a cone about the sensor's pointing direction -- to obtain full coverage of a circular region of interest on the ground. Contributions of this work included:
        <ol>
            <li> Definition of a 6-DoF constraint set (position + quaternion attitude) that guarantees FOV capture of this region of interest with arbitrary centroid location and radius. </li>
            <li> Introduction of a new theory of constrained conic intersections to validate the guarantees of this constraint set. </li>
            <li> Formulation of various SotA techniques in SCP modeling and optimal control catered to specification of terrain scanning events. </li>
            <li> Efficient initialization of SCP algorithms under this problem class by converting 3-DoF solutions to proximal 6-DoF solutions. </li>
        </ol>
        <br>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/CVG/CVG_illustration.png"
            caption="Diagram visually showing the main theoretical result"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include video.liquid 
            path="assets/media/projects/research/cvg_demo.mp4"
            caption="CVG demo of a landing maneuver with three terrain scanning events (for three separate regions of interest)"
            autoplay=true muted=true loop=true controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>
<br/><br/>

### 3-DoF LCvx Approach

While it is relatively natural to express a coupled translational/rotational constraint in a 6-DoF formulation, there are additional challenges for a restricted 3-DoF model. We would instead like to determine **the constraint set defined purely in vehicle position and thrust space (assuming a non-gimbaled engine) that guarantees existence of an attitude configuration which satisfies full visibility of the region of interest**. 
<br/>
It can be shown that this set, defined as the **C**ontrol **R**obust **E**nvelope (**CRE**), can be parameterized by convex second-order cones (SOCs) in both the vehicle's position and its thrust vector. This enables these constraints to be amenable to existing convex formulations for the powered descent guidance problem, notably the LCvx formulation, which provides a numerically-efficient implementation while still providing visibility guarantees.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/CVG/CRE.png"
            caption="Geometric visualization of the CRE -- the blue cone represents the positional constraint, and the orange cone represents the thrust constraint. The green cone represents the vehicle's FOV cone."
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>