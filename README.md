# To edit new_member

## Updating Data
- File: src\data\index.js
    - If you want to add the member only for citations within the website / they are not members of the lab use the `collaborators` array instead of `members` as shown below. You can also choose to hide the entry using the `pub` key in cases where there are temporary members involved
  ```
  export const members = [
  {
    pub:'yes',
    key: 'sridhar',
    value: 0,
    email:'ch@iittp.ac.in',
    title: 'Sridhar Chimalakonda',
    desc: 'Software Engineering',
    links:`
    LinkedIn [https://www.linkedin.com/in/sridharch]
    Google Scholar [https://scholar.google.com/citations?user=X3AR0HgAAAAJ&hl=en]
    Github [https://github.com/SridharChimalakonda]
    Twitter [https://twitter.com/ChimalakondaSri]
    ORCiD [https://orcid.org/0000-0003-0818-8178]
    ` 
  },
  ...
  ]
    ```
    - pub -> publish on page if 'yes'
    - `key` -> id used to identify across website for citation and image names
    - title -> Full Name
    - desc -> Area of Research
    - Links -> newline separated entries of the form "`text_to_display` [`actual link`]"
## Updating Images
- Folder: public\images
    - Add in "`key`.jpg"
    - Add in "b_`key`.jpg" for childhood image


# To add collaborator
- File: src\data\index.js
  - Update the `sponsors` array
```
[
  {
    project:"Academic",
    duration:"May 2019 - Present",
    src:"waterloo.jpg",
    redirect:"/collaborations",
    title:"University of Waterloo",
    link:"https://cs.uwaterloo.ca/~m2nagapp/index.html",
    collaborator:"Mei Nagappan",
  },
...
]
```
  - The `project` field can be either `Academic` or just the name of the current project since both are handled differently

# Other

- To add alumini update the alumini array in src\data\index.js

- Slambook needs to be updated from the excel sheet which collects form info

- Blogs need to be placed in src\Pages\_posts with images in src\Pages\_images as proper markdown files with header as shown below
```
---
title: 'Our journey with RISHA Lab'
category: 'B.Tech 2021'
subtitle: 'Aparna, Rishitha'
image: 'https://raw.githubusercontent.com/NobleMathews/risha-main/master/src/Pages/_images/aparna.jpg'
---
```
