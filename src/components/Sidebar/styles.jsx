import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #161688;
  padding-top: 50px;
  font-weight: 700;
`;

export const SidebarHeader = styled.div`
display: flex;
flex-direction: column;
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;

  p {
    letter-spacing: 1em;
  }

  span {
    color: #fff;
  }
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
`;

export const SidebarMenuItem = styled.li`
  padding: 10px;
  margin: 20px 0;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: #fff;
    
    border-radius: 5px;

    a {
      color: #161688;
    }
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  color: #fff;

  cursor: pointer;
  border-radius: 100%;
  width: 25px;
  height: 25px;

  img {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    margin-left: 15px;
  }
`;