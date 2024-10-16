---
layout: page
title: Branch-SCvx (Branched Trajectory Optimization)
description: TRO 2025 (pending)
img: assets/media/projects/research/BranchSCvx/cagedemo.png
importance: 1
category: Research
related_publications: false
---

Branched Trajectory Optimization establishes a unique, general purpose method for establishing graphs of trajectory optimization problems, and leads to a tractable formulation for contingency planning in the presence of unknown multimodal uncertainty distributions. This work is soon to be submitted to the [Transactions on Robotics (T-RO) journal](https://www.ieee-ras.org/publications/t-ro). The problem is formulated in continuous time, and then solved with the [continuous-time successive convexification (CT-SCvx)](https://arxiv.org/abs/2404.16826) framework with continuous-time constraint satisfaction guarantees, leading to the Branch Successive Convexification (Branch-SCvx) formulation.

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-md-9 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/BranchSCvx/branchscvx.png"
            caption="Visual illustration of the Branch-SCvx problem formulation"
            loading="eager" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>

The model begins with instantiation of a graph, where vertices represent trajectory segments, and edges represent connections between segments, with additional structure to make these connections physically realizable and numerically efficient during transcription. Consequently, it can be shown that the [Deferred Decision Trajectory Optimization (DDTO)](https://arc.aiaa.org/doi/abs/10.2514/6.2022-1583) problem model can be obtained through additional structure (notably, through restriction of the trajectory graph to be an arboresence), which supports the aforementioned contingency planning operations through modeling of multiple targets with an objective to defer decision to commit to any given target for as long as possible (thus keeping all targets *reachable* for as long as possible).
<br/><br/>
This work has been successfully applied to the HALO project (which is discussed more on [this page](https://bucknercsamuel.github.io/projects/HALO/)), with additional nonconvex constraints which were unable to be modeled previously, including: (1) a nonlinear drag term in the dynamics, (2) explicit free-final-time modeling and (3) cylindrical obstacle avoidance constraints.

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-md-9 mt-3 mt-md-0">
        {% include figure.liquid 
            path="assets/media/projects/research/BranchSCvx/halodemo.png"
            caption="Timelapse of a HALO quadrotor landing demo with specification of obstacle avoidance constraints"
            loading="eager" class="img-fluid"%}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>

I have also developed a custom GUI implementation of Branch-SCvx applied to the DDTO problem (building on the GUI work in [this paper](https://www.researchgate.net/publication/362626122_Visual_Modeling_System_for_Optimization-Based_Real-Time_Trajectory_Planning_for_Autonomous_Aerial_Drones)) and performed hardware experiments with the ACL lab's inhouse quadrotors in a netted cage environment.

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
    <div class="col-md-9 mt-3 mt-md-0">
        {% include video.liquid 
            path="https://www.youtube.com/embed/Ak2Vc9rGHHw?&autoplay=1&mute=1" 
            caption="Netted cage demo" 
            height="300" %}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div> <!-- empty space -->
</div>