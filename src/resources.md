---
layout: page
title: Resources
eleventyNavigation:
  key: Resources
  order: 7
---

Our collection of resources for is everyone who wants to find out more about trans and intersex.

{%- for entry in collections.resources %}
  <h2>
    <a href="{{ entry.url }}">{{ entry.data.title }}</a>
  </h2>
  <p>{{entry.data.excerpt}}</p>
{%- endfor %}