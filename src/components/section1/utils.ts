export function getElementCoords(element: HTMLElement, container: HTMLElement) {
  const elementRect = element.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  const relativeX = elementRect.left - containerRect.left
  const relativeY = elementRect.top - containerRect.top

  const centerX = relativeX + elementRect.width / 2
  const centerY = relativeY + elementRect.height / 2

  return { x: centerX, y: centerY }
}
