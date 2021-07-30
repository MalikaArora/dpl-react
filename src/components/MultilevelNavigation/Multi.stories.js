import React from "react";
import styled from "styled-components";
import MultiMenus from "./Multi";
import './styles.css';
export default{
    title: 'Multi-level Navigation Menu'
}
const Wrapper = styled.aside`
margin: 5%;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
width: 300px;
background-color: white;
`;

const menus = [
  {
    label: "Menu 1"
  },
  {
    label: "Menu 2",
    submenu: [
      {
        label: "Sub Menu 1"
      },
      {
        label: "Sub Menu 2"
      }
    ]
  },
  {
    label: "Menu 3",
    submenu: [
      {
        label: "Sub Menu 1",
        submenu: [
          {
            label: "Inner 1"
          },
          {
            label: "Inner 2"
          }
        ]
      },
      {
        label: "Sub Menu 2",
        submenu: [
          {
            label: "Inner 1"
          },
          {
            label: "Inner 2",
            submenu: [
              {
                label: "Lorem 1"
              },
              {
                label: "Lorem 2",
                submenu: [
                  {
                    label: "Ipsum"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Sub Menu 3"
      },
      {
        label: "Sub Menu 4",
        submenu: [
          {
            label: "Inner 1"
          },
          {
            label: "Inner 2"
          },
          {
            label: "Inner 3"
          }
        ]
      }
    ]
  },
  {
    label: "Menu 4"
  }
];

export const  App = () => {
  return (
    <Wrapper>
      <MultiMenus menus={menus} />
    </Wrapper>
  );
}


