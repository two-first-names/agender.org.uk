---
layout: page
title: Resources
eleventyNavigation:
  key: Resources
  order: 7
---
{% set navPages = collections.all | eleventyNavigation("Resources") %}
{%- for entry in navPages %}
  <h2>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </h2>
  <p>{{entry.excerpt}}</p>
{%- endfor %}