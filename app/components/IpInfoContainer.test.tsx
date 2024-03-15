import { describe, expect, it } from "vitest";
import { IpInfoContainer } from "@/app/components/IpInfoContainer";
import { IpResult as mockIpResult } from "@/app/mocks/fixtures/IpResult";
import { render } from "@testing-library/react";


describe('IpInfoContainer', () => {
  it('should render the component', () => {
    render(<IpInfoContainer ipDataResult={mockIpResult}/>)
  });

  it('should show correct ip info', () => {
    const {getByText} = render(<IpInfoContainer ipDataResult={mockIpResult}/>)

    expect(getByText(mockIpResult.data.ip)).toBeInTheDocument()
    expect(getByText(`${mockIpResult.data.city}, ${mockIpResult.data.region}`)).toBeInTheDocument()
    expect(getByText(mockIpResult.data.country_name)).toBeInTheDocument()
    expect(getByText(mockIpResult.data.asn.name)).toBeInTheDocument()
  });
})