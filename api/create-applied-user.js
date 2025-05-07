export default async function handler(req, res) {
    // Handle CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'
    );
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    // Destructure the fields from the request body
    const { name, slug, phone } = req.body;
  
    try {
      // Call Webflow API to create a new "Applied User" item
      const response = await fetch('https://api.webflow.com/v2/collections/b450ca82263a274e60b2c69064bf661b676342d2b33fbe75b50d6fb5c68d7e0f/items', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer 6811da0773f06606ec5b071e',
          'Content-Type': 'application/json',
          'accept-version': '2.0.0',
        },
        body: JSON.stringify({
          isArchived: false,
          isDraft: false,
          fieldData: {
            name,  // Name of the applicant
            slug, // Email of the applicant
            phone, // Phone number of the applicant
          },
        }),
      });
  
      const data = await response.json();
  
      // Handle Webflow API response
      if (!response.ok) {
        return res.status(response.status).json({ error: data });
      }
  
      return res.status(200).json({ success: true, data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  