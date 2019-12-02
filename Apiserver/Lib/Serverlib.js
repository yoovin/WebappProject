// Get side
exports.getMember = (req, res, Member) =>{
    if(req.query.number){
        console.log(req.query.number)
        var findNumber = req.query.number
        Member.find((err, data)=>{
            if(err) return res.status(500).send({error:'database failure'})
            res.json(data)
        }).sort({_id:-1}).limit(findNumber)
    }else{
        Member.find((err, data)=>{
            if(err) return res.status(500).send({error:'database failure'})
            res.json(data)
        }).sort({_id:-1})
    }
}

exports.getPublication = (req, res, Publication) =>{
    if(req.query.number){
        Publication.find((err, data)=>{
            if(err) {
                console.error(err)
                return res.status(500).send({error:'database failure'})
            }
            res.json(data)
        }).sort({_id:-1}).limit(parseInt(req.query.number))
    }else{
        Publication.find((err, data)=>{
            if(err) return res.status(500).send({error:'database failure'})
            res.json(data)
        })
    }
}

exports.getNotice = (req, res, Notice) =>{
    if(req.query.number){
        Notice.find((err,data)=>{
            if(err){
                console.error(err)
                return res.status(500).send({error:'database failure'})
            } 
            res.json(data)
        }).sort({_id:-1}).limit(parseInt(req.query.number))
    }else{
        Notice.find((err,data)=>{
            if(err){
                console.error(err)
                return res.status(500).send({error:'database failure'})
            } 
            res.json(data)
        }).sort({_id:-1})
    }
}

// Post side
exports.addMember = (req, res, Member) =>{
    let member = new Member({
        name: req.body.name,
        desc: req.body.desc
    })

    member.save((err)=>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Database added!")
            res.json({result:1})
        }
    })
}

exports.addPublication = (req, res, Publication) =>{
    let publication = new Publication({
        trans: req.body.trans,
        sector: req.body.sector,
        desc: req.body.desc,
        url: req.body.url
    })

    publication.save((err)=>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Publication added!")
            res.json({result:1})
        }
    })
}

exports.addNotice = (req, res, Notice) =>{
    let notice = new Notice({
        title: req.body.title,
        desc: req.body.desc
    })
    notice.save(err =>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Notice added!")
            res.json({result:1})
        }
    })
}