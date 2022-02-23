// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    //res.status(200).json({ name: 'John Doe' })

    const response = fetch("https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/PP3SPA6hmE89dX-ZLq-s9/entries?page=1&size=50")
    const result = response.json()

    if (!response.ok){
        res.status(response.status)
    }
    return res.json(result)
}