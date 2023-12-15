import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #161688;
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
  margin: 25px 0;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: #555;
    border-radius: 5px;
  }
`;

export const LogoutButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;