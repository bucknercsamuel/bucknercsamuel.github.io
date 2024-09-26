---
layout: page
title: Internships
permalink: /internships/
description: >
   Internship experiences at both the undergraduate and graduate level. This includes:
   - Seven internships with **NASA** (various centers)
   - Two internships with **Blue Origin**
   *(All media shown has been approved for public distribution)*
nav: true
nav_order: 2
display_categories: [Graduate,Undergraduate]
horizontal: false
---

<!-- pages/internships.md -->
<div class="internships">
{% if site.enable_internship_categories and page.display_categories %}
  <!-- Display categorized internships -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_internships = site.internships | where: "category", category %}
  {% assign sorted_internships = categorized_internships | sort: "importance" %}
  <!-- Generate cards for each internship -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for internship in sorted_internships %}
      {% include internships_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for internship in sorted_internships %}
      {% include internships.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display internships without categories -->

{% assign sorted_internships = site.internships | sort: "importance" %}

  <!-- Generate cards for each internship -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for internship in sorted_internships %}
      {% include internships_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for internship in sorted_internships %}
      {% include internships.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
