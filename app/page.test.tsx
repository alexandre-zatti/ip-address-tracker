import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import Home from "@/app/page";
import { IpResult as mockIpResult, IpResultError as mockIpResultError } from "@/app/mocks/fixtures/IpResult";
import { server } from "@/app/mocks/node";
import { http, HttpResponse } from "msw";
import { toast } from "react-toastify";

vi.mock('next/headers', () => ({
  headers: vi.fn().mockReturnValue({
    get: vi.fn().mockReturnValue('192.0.2.0')
  })
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn()
  }),
  usePathname: () => ({
    pathname: 'http://localhost:3000/'
  })
}))

vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn()
  }
}))

describe('Home', () => {

  it('should render the component with default ip values', async () => {
    const {getByLabelText, getByText} = render(await Home({searchParams: {ip: ''}}))

    expect(getByLabelText('ip search name')).toHaveValue(mockIpResult.ip)
    expect(getByText(mockIpResult.ip)).toBeInTheDocument()
    expect(getByText(`${mockIpResult.city}, ${mockIpResult.region}`)).toBeInTheDocument()
    expect(getByText(mockIpResult.country_name)).toBeInTheDocument()
    expect(getByText(mockIpResult.asn.name)).toBeInTheDocument()
  });

  it('should render error message if ip data fetch not successful', async () => {
    server.use(
      http.get('https://api.ipdata.co/*', () => {
        return HttpResponse.json(mockIpResultError, {status: 400})
      })
    )

    render(await Home({searchParams: {ip: ''}}))

    expect(toast.error).toHaveBeenCalledWith(mockIpResultError.message)
  });
})