import { ButtonComponent } from "../../components/Button"
import { Input } from "../../components/input"


export const LoginPage = () => {
    return (
        <div className="container">
            <h1>Bem Vindo</h1>
            
                <Input type="Email" placeholder="Insira seu Email"/>
                <ButtonComponent title="Botão"/>

        </div>
    )
}