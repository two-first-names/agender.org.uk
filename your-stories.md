---
layout: page
title: Your Stories
eleventyNavigation:
  key: Your Stories
  order: 7
---
Our members and allies come from all sorts of backgrounds, and everyone’s journey is different. Read some of their experiences, and find out how a:gender can help in the workplace and beyond.

{%- for entry in collections.yourstories %}
  <h2>
    <a href="{{ entry.url }}">{{ entry.data.title }}</a>
  </h2>
{%- endfor %}