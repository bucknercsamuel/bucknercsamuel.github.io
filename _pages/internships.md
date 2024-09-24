---
layout: page
title: internships
permalink: /internships/
description: Internship experiences at both the undergraduate and graduate level.
nav: true
nav_order: 2
display_categories: [graduate,undergraduate]
horizontal: false
---

<!-- pages/internships.md -->
<div class="internships">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized internships -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_internships = site.internships | where: "category", category %}
  {% assign sorted_internships = categorized_internships | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_internships %}
      {% include internships_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_internships %}
      {% include internships.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display internships without categories -->

{% assign sorted_internships = site.internships | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_internships %}
      {% include internships_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_internships %}
      {% include internships.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>