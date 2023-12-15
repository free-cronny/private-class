import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  padding-top: 20px;
`;

export const SidebarHeader = styled.div`
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarMenuItem = styled.li`
  padding: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;