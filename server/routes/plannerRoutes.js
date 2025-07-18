const express = require("express")
const { generatePlan, getallplans } = require("../controllers/plannerController")


const router = express.Router()

router.post("/", generatePlan )
router.get('/getallplans', getallplans)


module.exports = router