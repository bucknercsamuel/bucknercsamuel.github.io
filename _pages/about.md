---
layout: about
title: About
permalink: /
subtitle: Graduate Researcher in Autonomous Systems

profile:
  align: right
  image: prof_pic.JPEG
  image_circular: true # crops the image to make it circular

news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

I am a fifth-year Ph.D. student in the [Aeronautics & Astronautics Department at the University of Washington](https://www.aa.washington.edu/), working with the [Autonomous Controls Laboratory](https://uwacl.com/) under Dr. Behçet Açıkmeşe. My research interests are divided between developing practical, real-time numerical algorithms and applying them to relevant real-world scenarios in aerospace engineering and, more broadly, in autonomous systems. Some of my focus areas include:

* **Convex Optimization** *(Convex Approximation Methods, Sequential Convex Programming)*
* **Real-Time Trajectory Optimization** 
* **Interaction-Aware Planning** *(Contact-Rich, Perception-In-The-Loop)*
* **Application Domains:**
    * **Robotics:** Multibody Systems, Legged Locomotion
    * **Spaceflight:** Powered Descent Guidance, Relative Orbital Maneuvers
    * **Aeronautics:** Multirotors, eVTOLs

Academically, I graduated *Summa Cum Laude* from the University of Florida with a B.S. in Aerospace Engineering (2020), and am the recipient of both the NSF GRFP and ARCS fellowships for graduate research. My internship experience is divided between [NASA](https://www.nasa.gov/) as a [Pathways Co-Op](https://www.nasa.gov/careers/pathways/) (6x), [Blue Origin](https://www.blueorigin.com/) (2x), and [Mitsubishi Electric Research Laboratories](https://www.merl.com/) (1x). Have a look through my website to learn more!
<br/><br/>

## Research Showcase

{% include research_card.liquid
    title="CI-SCvx: Contact-Implicit Successive Convexification"
    project_url="/projects/ciscvx/"
    description="TODO."
    media_path="assets/media/projects/research/ciSCvx/project_video.mp4"
    paper_url="https://arxiv.org/pdf/2604.09993"
    video_height="300"
    video_start=107
    video_end=167
    video_controls=false
%}

{% include research_card.liquid
    title="HALO: Hazard-Aware Landing Optimization"
    project_url="haynec.github.io/papers/halo/"
    description="A combined perception (HALSS) and trajectory planning (Adaptive-DDTO) solution for contingency planning in landing maneuvers with multiple candidate landing sites. This was an equal-contribution project with Chris Hayner, published and presented at ICRA 2023, where I led the development of the Adaptive-DDTO algorithm."
    media_path="https://www.youtube.com/embed/KqCXGDTntDU?&autoplay=1&mute=1&loop=1&playlist=KqCXGDTntDU"
    paper_url="https://arxiv.org/abs/2304.01583"
    video_height="300"
    video_controls=false
%}

<!-- {% include research_card.liquid
    title="Branch-SCvx: Branched Trajectory Optimization"
    project_url="/projects/BranchSCvx/"
    description="A general-purpose method for constructing graphs of trajectory optimization problems, leading to a tractable formulation for contingency planning under unknown multimodal uncertainty. Solved with continuous-time successive convexification (CT-SCvx) for continuous-time constraint satisfaction guarantees, and validated via hardware experiments on quadrotors in a netted cage. Pending submission to T-RO 2025."
    media_path="https://www.youtube.com/embed/Ak2Vc9rGHHw?&autoplay=1&mute=1&loop=1&playlist=Ak2Vc9rGHHw"
    video_height="300"
    video_controls=false
%} -->

{% include research_card.liquid
    title="CVG: Constrained Visibility Guidance"
    project_url="/projects/CVG/"
    description="A novel approach to modeling terrain scanning constraints for powered landing maneuvers using a new theory of constrained conic intersections. The work spans both a high-fidelity 6-DoF formulation via sequential convex programming and a 3-DoF formulation via lossless convexification, developed during my 2023 rotation at the NASA Johnson Space Center."
    media_path="assets/media/projects/research/CVG/cvg_demo.mp4"
    paper_url="https://arc.aiaa.org/doi/abs/10.2514/6.2024-1759"
    video_controls=false
%}

{% include research_card.liquid
    title="ROS-Based Flight Software for the D3 CubeSat Mission"
    project_url="/projects/D3Sat/"
    description="The first flight-ready ROS (Robot Operating System) based flight software for a CubeSat, developed as the lead flight software engineer for the D3 (Drag De-orbit Device) mission. The software supports radio telemetry, GPS navigation, finite-state handling, command processing, onboard updates, and failsafe reboots; D3 was successfully launched in July 2022 and completed all mission requirements in April 2023."
    media_path="assets/media/projects/research/D3Sat/SmallSat_Poster.png"
    paper_url="https://digitalcommons.usu.edu/smallsat/2020/all2020/241/"
    image_max_height="300px"
    video_controls=false
%}

<br/>