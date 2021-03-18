import React, { useRef } from 'react';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';

const CategoryFilter = ({ categoryList }) => {
  const categoryRef = useRef(null);
  const ALL_CATEGORY_NAME = 'All';
  const isActive = ({ isCurrent }) =>
    isCurrent ? { id: 'active', tabIndex: -1 } : {};

  return (
    <Nav aria-label="Category Filter" style={{marginBottom:"0.5rem"}}>
      {/* <CategoryTitle>Filter :</CategoryTitle> */}
      <CategoryButton getProps={isActive} to="/">
        {ALL_CATEGORY_NAME}
      </CategoryButton>
      <Divider />
      <CategoryUl ref={categoryRef} className="invisible-scrollbar">
        {categoryList
          .sort((a, b) => b.totalCount - a.totalCount)
          .map((category) => {
            const fieldValue = category;

            if ([].includes(fieldValue))
            {
              return (
                <li key={fieldValue}>
                  <CategoryButton2
                    getProps={isActive}
                    to={`/category/${kebabCase(fieldValue)}/`}
                  >
                    {fieldValue}
                  </CategoryButton2>
                </li>
              );
            }
            else{
              return (
                <li key={fieldValue}>
                  <CategoryButton
                    getProps={isActive}
                    to={`/category/${kebabCase(fieldValue)}/`}
                  >
                    {fieldValue}
                  </CategoryButton>
                </li>
              );
            }

          })}
      </CategoryUl>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  // background-color: var(--color-card);
  background-color:transparent!important;
  margin-bottom: 48px;
  padding: 12px var(--sizing-md);
  border-radius: var(--border-radius-base);
  padding-left: 0px !important;
  a#active {
    color: var(--color-white);
    background-color: var(--color-blue);
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const CategoryTitle = styled.em`
  position: static;
  width: auto;
  height: auto;
  clip: auto;
  white-space: auto;

  flex-shrink: 0;
  font-size: var(--text-base);
  font-weight: var(--font-weight-semi-bold);
  font-style: initial;
  margin-right: var(--sizing-lg);

  @media (max-width: 768px) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: no-wrap;
  }
`;

const CategoryButton2 = styled.a`
  cursor: pointer;
  display: block;
  background-color: var(--color-category-button2) !important;
  padding: var(--sizing-sm) var(--sizing-base);
  border-radius: var(--border-radius-base);
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);

  :focus {
    outline: none;
  }

  &:hover {
    color: var(--color-white) !important;
    background-color: var(--color-blue) !important;
  }

  &:focus-visible {
    color: var(--color-white) !important;
    background-color: var(--color-blue) !important;
  }
`;

const CategoryButton = styled.a`
  cursor: pointer;
  display: block;
  background-color: var(--color-category-button) !important;
  padding: var(--sizing-sm) var(--sizing-base);
  border-radius: var(--border-radius-base);
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
  width: max-content;

  :focus {
    outline: none;
  }

  &:hover {
    color: var(--color-white) !important;
    background-color: var(--color-blue) !important;
  }

  &:focus-visible {
    color: var(--color-white) !important;
    background-color: var(--color-blue) !important;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  margin: 0 var(--sizing-sm);
  transform: translateX(-50%);
  background-color: var(--color-divider);
`;

const CategoryUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  li + li {
    margin-left: 6px;
  }
`;

export default CategoryFilter;
