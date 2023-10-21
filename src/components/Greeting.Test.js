import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting', () => {
   


    test('renders Hello World as a text', () => {
        render(<Greeting />)
        // act 
        //.... nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false })

        expect(helloWorldElement).toBeInTheDocument()
    })
})