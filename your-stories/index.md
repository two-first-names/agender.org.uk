---
layout: page
title: Your Stories
eleventyNavigation:
  key: Your Stories
  order: 6
---
Our members and allies come from all sorts of backgrounds, and everyone’s journey is different. Read some of their experiences, and find out how a:gender can help in the workplace and beyond.

{% set navPages = collections.all | eleventyNavigation("Your Stories") %}
{%- for entry in navPages %}
  <h2>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </h2>
{%- endfor %}