export default function guardrail(mathFunction) {
  const result = [0, 'Guardrail was processed'];
  try {
    result[0] = mathFunction();
  } catch (e) {
    result[0] = String(e);
  }
  return result;
}
