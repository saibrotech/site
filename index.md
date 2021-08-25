---
layout: home
header:
  title: home.title
  text: home.text
  action: # action button is optional
    label: home.action.label
    url: '#about'

sections:
  - type: call-to-action.html
    section_id: about
    background_style: bg-primary
    title: call_to_action.title
    text: call_to_action.text 
    actions:
      - title: call_to_action.actions.what_we_develop.title
        url: '#services'
        class: btn-light

  - type: services.html
    section_id: services
    #background_style: bg-info
    title: services.title
    services:
      - title: services.service_list.frontend.title
        text: services.service_list.frontend.text
        icon: fa-angular
      - title: services.service_list.backend.title
        text: services.service_list.backend.text
        icon: fa-python
      - title: services.service_list.prototypes.title
        text: services.service_list.prototypes.text
        icon: fa-figma
      - title: services.service_list.design.title
        text: services.service_list.design.text
        icon: fa-pencil-ruler
        icon_type: fas
      - title: services.service_list.i18n.title
        text: services.service_list.i18n.text
        icon: fa-globe
        icon_type: fas
      - title: services.service_list.automation.title
        text: services.service_list.automation.text
        icon: fa-robot
        icon_type: fas

  - type: portfolio.html
    # this section has always ID 'portfolio'
    #section_id: portfolio
    #background_style: bg-dark
    title: portfolio.title
    projects:
      - title: portfolio.projects.codexarch.title
        text: portfolio.projects.codexarch.text
        icon: codexarch.jpg
        url: '#'
      - title: portfolio.projects.lpa.title
        text: portfolio.projects.lpa.text
        icon: lpa.jpg
        url: '#'
      - title: portfolio.projects.mitra.title
        text: portfolio.projects.mitra.text
        icon: mitra.jpg
        url: '#'

  - type: clients.html
    section_id: clients
    title: clients.title
    clients:
      - title: Volare
        icon: volare-logo.png
      - title: LPA UFSM
        icon: lpa-logo.png

  - type: culture.html
    section_id: culture
    background_style: bg-dark text-white
    title: culture.title
    items:
      - title: culture.items.who_we_are.title
        text: culture.items.who_we_are.text
        icon: quem-somos.jpg
      - title: culture.items.how_we_work.title
        text: culture.items.how_we_work.text
        icon: como-trabalhamos.jpg
      - title: culture.items.working_model.title
        text: culture.items.working_model.text
        icon: modelo-de-trabalho.jpg

  - type: members.html
    section_id: members
    title: members.title
    background_style: bg-info text-white
    members:
      - title: Andre Porto Leal Piantino
        text: members.member_list.andre.text
        subtext: members.member_list.andre.subtext
        image: assets/img/members/andre.jpg
        icon_linkedin: fa-linkedin
        icon_type: fab
        url_linkedin: 'https://www.linkedin.com/in/andre-porto-leal-piantino/'
        icon_github: fa-github
        icon_type: fab
        url_github: https://github.com/piantino
      - title: Fernanda Kuhnen Hermenegildo
        text: members.member_list.fernanda.text
        subtext: members.member_list.fernanda.subtext
        image: assets/img/members/fernanda.jpg
        icon_linkedin: fa-linkedin
        icon_type: fab
        url_linkedin: 'https://www.linkedin.com/in/fernanda-kuhnen-hermenegildo-2747b4a1/'
        icon_github: fa-github
        icon_type: fab
        url_github: 'https://github.com/fekuhnen'
      - title: Gustavo Lucas Valente
        text: members.member_list.gustavo.text
        subtext: members.member_list.gustavo.subtext
        image: assets/img/members/gustavo.jpg
        icon_linkedin: fa-linkedin
        icon_type: fab
        url_linkedin: 'https://www.linkedin.com/in/gutivalente/'
        icon_github: fa-github
        icon_type: fab
        url_github: 'https://github.com/gutivalente'
      - title: Nicole Buitoni
        text: members.member_list.nicole.text
        subtext: members.member_list.nicole.subtext
        image: assets/img/members/nicole.jpg
        icon_linkedin: fa-linkedin
        icon_type: fab
        url_linkedin: 'https://www.linkedin.com/in/nicole-buitoni/'
        icon_github: fa-github
        icon_type: fab
        url_github: https://github.com/Nibuitoni

  # - type: timeline.html
  #   section_id: historia
  #   title: Major Achievements!
  #   background_style: bg-dark text-primary
  #   last_image: assets/img/timeline-end.png
  #   actions:
  #     - image: assets/img/portfolio/thumbnails/1.jpg
  #       title: >+
  #         2017-2018
  #         **Humble Beginnings**
  #       text: >-
  #         We begun with small group of people willing to work hard and make our
  #         teaching skills worth , in front of all others!
  #     - image: assets/img/portfolio/thumbnails/2.jpg
  #       title: >+
  #         November 2019
  #         An Coaching started
  #       text: >-
  #         We started to gather like minded people and started our stategies
  #         and future plans to them. As a result , interested people joined us!

  - type: contact.html
    section_id: contact
    title: contact.title
    text: contact.text
    actions:
    - title: E-Mail
      icon: fa-envelope
      url: mailto://hi@saibro.tech
    - title: Linkedin
      icon: fa-linkedin
      icon_type: fab
      url: https://www.linkedin.com/company/saibrotech
    - title: Github
      icon: fa-github
      icon_type: fab
      url: https://github.com/saibrotech

---
