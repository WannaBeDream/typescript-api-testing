import { ResponseValidator } from "response-openapi-validator";

export async function validateBodyBySchemas(response: any) {
  const responseValidator = new ResponseValidator({
    openApiSpecPath: "https://petstore.swagger.io/v2/swagger.json",
    apiPathPrefix: "/v2",
    ajvOptions: {
        strict: false,
      allErrors: true,
      verbose: true,
      formats: {
        double: "[+-]?\\d*\\.?\\d+",
        int32: /^\d+$/,
        int64: /^\d+$/,
    },
    },
  });

  await responseValidator.assertResponse({
    method: response.config.method,
    requestUrl: response.config.baseURL + response.config.url,
    statusCode: response.status,
    body: response.data,
  });
  return response;
}
