// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    //res.status(200).json({ name: 'John Doe' })

    const response = await fetch("https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/PP3SPA6hmE89dX-ZLq-s9/entries?page=1&size=50")
    console.log(response);
    const result = await response.json()
    console.log(result);

    if (!response.ok){
        res.status(response.status)
    }
    return res.json(result)
}