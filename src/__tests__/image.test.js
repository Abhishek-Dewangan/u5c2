import { fireEvent, render, screen } from "@testing-library/react";
import { Image } from "../Components/Image";
// import renderer from 'react-test-render'
import { Input } from "../Components/Input";

describe("test for the image element",()=>{
    it("should have image element in dom", () => {
        render(<Image/>);
        let image = screen.getByTestId("imagetag");
        expect(image).toBeInTheDocument();
      });

      it("should have image element in dom with border radious ", () => {
        render(<Image/>);
        let image = screen.getByTestId("imagetag");
        
        expect(image).should("border-radious","10%")
      });


      

})