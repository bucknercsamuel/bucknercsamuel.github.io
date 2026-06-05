---
layout: page
title: "Graph-SCvx: Graph Successive Convexification for Deferred-Decision Trajectory Optimization"
description: Transactions on Robotics (in preparation)
img: assets/img/publication_preview/buckner2026graphscvx.PNG
importance: 1
category: Research
related_publications: true
---

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
    <div class="col-md-9 mt-3 mt-md-0">
        {% include figure.liquid
            path="assets/media/projects/research/GraphSCvx/overview.png"
            caption="Conceptual illustration of the Graph-SCvx modeling approach with application to Deferred-Decision Trajectory Optimization (DDTO) problems for contingency planning."
            loading="eager"
            class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
</div>

### Abstract

Autonomous exploration in unknown and dynamic
environments poses many challenges for the design of safe and re-
liable path planning algorithms. In such a scenario with multiple
candidate objectives, an agent may prefer to defer the decision
to commit to any particular objective until more information
can be gathered. In this work, we propose a graph-based trajec-
tory optimization formulation–graph successive convexification
(Graph-SCvx)–and show how Graph-SCvx can be used to solve
the deferred-decision trajectory optimization (DDTO) problem
in real-time for various robotic tasks. The resulting Graph-
DDTO model maximizes the duration for which reachability
is maintained to a collection of target states, and is capable
of flexible nonconvex path constraint specification building on
the continuous-time successive convexification formulation. We
demonstrate Graph-DDTO against a predecessor algorithm in
a cluttered obstacle avoidance scenario for quadrotor flight,
showing up to a 19× solve-time improvement. We then demon-
strate Graph-DDTO’s efficacy in the autonomous soft landing
problem, where a quadrotor must safely descend and land on
unknown and hazardous terrain with perception-in-the-loop;
Graph-DDTO outperforms benchmark comparison algorithms
while achieving ≥ 95% success rate in all test environments.
Finally, we perform quadrotor hardware demonstrations with dy-
namic remote-controlled ground obstacles to demonstrate Graph-
DDTO’s suitability for onboard implementation.

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
    <div class="col-md-9 mt-3 mt-md-0">
        {% include video.liquid
            path="assets/media/projects/research/GraphSCvx/demo.mp4"
            caption="Demonstration of Graph Deferred-Decision Trajectory Optimization (Graph-DDTO) for quadcopter landing in a hazardous terrain environment."
            autoplay=true
            muted=true
            loop=true
            controls=true %}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
</div>

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
    <div class="col-md-9 mt-3 mt-md-0">
        {% include video.liquid
            path="assets/media/projects/research/GraphSCvx/method_compare.mp4"
            caption="We benchmark Graph-DDTO against several types of single-target algorithms and show improved performance in terms of fuel efficiency and safety."
            autoplay=true
            muted=true
            loop=true
            controls=true %}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
</div>

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
    <div class="col-md-9 mt-3 mt-md-0">
        {% include video.liquid
            path="assets/media/projects/research/GraphSCvx/monte_carlo.mp4"
            caption="We perform large-scale Monte Carlo analysis and find that Graph-DDTO is the only algorithm capable of exceeding 95% success rate across all three challenge maps."
            autoplay=true
            muted=true
            loop=true
            controls=true %}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
</div>

<div class="row">
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
    <div class="col-md-9 mt-3 mt-md-0">
        {% include video.liquid
            path="assets/media/projects/research/GraphSCvx/flight_test_results.mp4"
            caption="We also deploy Graph-DDTO on several hardware demonstrations to validate the method's robustness to dynamic obstacles in the terrain environment."
            autoplay=true
            muted=true
            loop=true
            controls=true %}
    </div>
    <div class="col-md mt-3 mt-md-0">&nbsp;</div>
</div>
