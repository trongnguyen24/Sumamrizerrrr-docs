export function getElementCoords(element: HTMLElement, container: HTMLElement) {
  const elementRect = element.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  const relativeX = elementRect.left - containerRect.left
  const relativeY = elementRect.top - containerRect.top

  return { x: relativeX, y: relativeY }
}
