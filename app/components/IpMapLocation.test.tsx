import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import IpMapLocation from "@/app/components/IpMapLocation";
import { IpResult as mockIpResult } from "@/app/mocks/fixtures/IpResult";


describe('IpMapLocation', () => {
  it('should render the component', () => {
    render(<IpMapLocation ipDataResult={mockIpResult}/>)
  });
})