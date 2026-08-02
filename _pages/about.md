---
permalink: /
title: "Nayeong Kim"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a Research Scientist in the Multimodal Model Lab at Huawei Singapore Research Center, where I work on post-training for video generation models with [Prof. Hanwang Zhang](https://scholar.google.com/citations?user=YG0DFyYAAAAJ&hl=en).

I received my Ph.D degree in computer science and engineering department at [POSTECH](http://www.postech.ac.kr/eng/), where I was a member of the [Computer Vision Lab (CVLab)](https://cvlab.postech.ac.kr/), advised by [Prof. Suha Kwak](https://suhakwak.github.io/). During my Ph.D., I worked on improving the robustness of vision models by discovering and mitigating spurious correlations.

Previously, I received a B.S. in computer science and engineering department from POSTECH in 2017.

{% include base_path %}

## Work experience
* Jun 2025 – present: Research Scientist, Multimodal Model Lab, Huawei Singapore Research Center
  * Working with [Prof. Hanwang Zhang](https://scholar.google.com/citations?user=YG0DFyYAAAAJ&hl=en)
* Mar 2024 – May 2024: Visiting Researcher, University of Tübingen
  * Host: [Prof. Seong Joon Oh](https://seongjoonoh.com/)
* Jan 2018 – Feb 2018: Research Intern, Samsung Electronics
* Mar 2017 – Sep 2017: Research Intern, Exem

## Publications

{% for post in site.publications reversed %}
<div class="publication-entry" style="display: flex; gap: 16px; align-items: flex-start; margin-bottom: 1.75em;">
  {% if post.teaser %}
  <img src="{{ post.teaser }}" alt="" style="width: 110px; height: auto; border-radius: 4px; flex-shrink: 0;">
  {% endif %}
  <div>
    <h3 style="margin: 0 0 4px; font-size: 1.05em;">
      {% if post.paperurl %}<a href="{{ post.paperurl }}">{{ post.title }}</a>{% else %}{{ post.title }}{% endif %}
    </h3>
    <p style="margin: 0 0 2px; font-size: 0.92em;">
      {% for author in post.authors %}{% if author contains "Nayeong Kim" %}<strong>{{ author }}</strong>{% else %}{{ author }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}
    </p>
    <p style="margin: 0 0 4px; font-size: 0.88em; opacity: 0.75;">
      {{ post.venue }}{% if post.date %}, {{ post.date | date: "%Y" }}{% endif %}
    </p>
    {% if post.paperurl or post.codeurl or post.projecturl %}
    <p style="margin: 0; font-size: 0.85em;">
      [ {% if post.paperurl %}<a href="{{ post.paperurl }}">Paper</a>{% endif %}{% if post.codeurl %} / <a href="{{ post.codeurl }}">Code</a>{% endif %}{% if post.projecturl %} / <a href="{{ post.projecturl }}">Project</a>{% endif %} ]
    </p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Education

* Ph.D. in Computer Science and Engineering, POSTECH, Feb 2025, advised by Prof. Suha Kwak
* B.S. in Computer Science and Engineering, POSTECH, 2017

## Talks

<ul>
{% for post in site.talks reversed %}
  <li>
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <p class="archive__item-excerpt">{{ post.type }} at {{ post.venue }}, {{ post.date | date: "%b %Y" }}</p>
  </li>
{% endfor %}
</ul>

## Awards
* Qualcomm Innovation Fellowship, 2023
* Samsung Strategy and Innovation Paper Award, 2023
* BK21 Best Paper Award, 2023

## Professional service
* Reviewer: NeurIPS, ICML, ICLR, CVPR, ECCV, ICCV, AAAI, WACV, ACCV, IJCV
