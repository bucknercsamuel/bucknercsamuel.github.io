---
layout: page
title: "CI-SCvx: Contact-Implicit Successive Convexification for Legged Locomotion"
description: ICRA 2026
img: assets/img/publication_preview/buckner2026ciscvx.png
importance: 1
category: Research
related_publications: true
---

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
    <div class="col-md-9 mt-3 mt-md-0">
        {% include figure.liquid
            path="assets/media/projects/research/ciSCvx/overview.png"
            caption="Overview of the CI-SCvx framework, from problem formulation to the modified, GPU-accelerated successive convexification algorithm implementation."
            loading="eager"
            class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
</div>

### Abstract

Contact-implicit trajectory optimization (CITO)
enables the automatic discovery of contact sequences, but
most methods rely on fine time discretization to capture all
contact events accurately, which increases problem size and
runtime while tying solution quality to grid resolution. We
extend the recently proposed sequential convex programming
(SCP) approach for trajectory optimization, continuous-time
successive convexification (CT-SCVX), to CITO by introducing
integral cross-complementarity constraints, which eliminate the
risk of missing contact events between discretization nodes while
preserving the flexibility of contact mode changes. The result-
ing framework, contact-implicit successive convexification (CI-
SCVX), models full multibody dynamics in maximal coordinates,
including stick-slip friction and partially elastic impacts. To
handle complementarity constraints, we embed a backtracking
homotopy scheme within SCP for reliable convergence. We
implement this framework in a stand-alone Python software,
leveraging JAX for GPU acceleration and a custom canonical-
form parser for the convex subproblems of SCP to avoid the
overhead of general-purpose modeling tools such as CVXPY.
We demonstrate CI-SCVX on diverse legged-locomotion tasks.
In particular, we validate the approach in MuJoCo with the
Gymnasium HalfCheetah model against the MuJoCo MPC
baseline, showing that a tracking simulation with the optimized
torque profiles from CI-SCVX produces physically consistent
trajectories with lesser energy consumption. We also show
that the resulting software achieves faster solve times than
existing state-of-the-art SCP implementations by over an order
of magnitude, thereby demonstrating a practically important
contribution to scalable real-time trajectory optimization.{% cite buckner2026ciscvx %}

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
    <div class="col-md-9 mt-3 mt-md-0">
        {% include video.liquid
            path="assets/media/projects/research/ciSCvx/project_video.mp4"
            caption="Video summary of CI-SCvx."
            autoplay=true
            muted=true
            loop=true
            controls=true %}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
</div>
