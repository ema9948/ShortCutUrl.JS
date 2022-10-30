import sequelize from '../DB/configDb.js';
import Url from '../models/UrlModells.js';
import Post from "../models/UrlModells.js"
import User from "../models/UserModells.js"
import hashCode from '../utils/hashCode.js';

export const allUrls = async (req, res) => {
    const uid = req.uid

    const data = await User.findAll({ include: { model: Url }, where: { id: uid } });
    try {
        if (data[0]?.id != uid) return res.status(401).json()
        return res.status(200).json(data[0]?.urls);
    } catch (error) {
        return res.status(500).json();
    }

}

export const addUrl = async (req, res) => {
    const uid = req.uid;

    // console.log(req.uid);
    const { url } = req.body
    const hash = hashCode(url)

    try {
        if (!url) return res.status(404).json({ "content": "require url" });
        if (!uid) return res.status(404).json({ "content": "require uid" });

        const urlShortCut = "https://www.shotCutUrl/" + hashCode(url);
        const urlGen = await Post.create({ url, urlShortCut: urlShortCut, user_id: uid })
        res.status(201).json();

    } catch (error) {
        return res.status(500).json()
    }



}

export const editUrl = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    const { url } = req.body;
    try {
        if (!url) return res.status(404).json({ "content": "require url" });

        const data = await Url.findOne({ where: { id: id } });

        if (data === null) return res.status(404).json()

        if (data.user_id !== uid) return res.status(401).json()

        data.url = url;
        const urlShortCut = "https://www.shotCutUrl/" + hashCode(url);
        data.update({ url: url, urlShortCut: urlShortCut }, { where: { id: id } });

        return res.status(202).json();
    } catch (error) {
        return res.status(500).json()
    }


}

export const deleteUrl = async (req, res) => {
    const uid = req.uid;

    const { id } = req.params;

    try {

        const data = await Url.findOne({ where: { id: id } });
        if (data === null) return res.status(404).json()
        if (data.user_id !== uid) return res.status(401).json()

        data.destroy()

        return res.status(200).json()
        // console.log(data.toJSON())
    } catch (error) {
        return res.status(500).json()
    }


}

