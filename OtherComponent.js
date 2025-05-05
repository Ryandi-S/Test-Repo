const TestElement = () => {
  return (
    <p>--- Test Element Here ---</p>
  )
}

// Attach to window so Webflow can access it
window.TestElement = TestElement;