// https://api.vk.com/method/METHOD_NAME?PARAMETERS&access_token=ACCESS_TOKEN&v=5.122
const axios = require('../node_modules/axios')

function getpostdata(url) {
  try {
    let arr = url.split('w=wall')
    let data = arr[1].split('_')
    return { group_id: data[0], post_id: data[1] }
  } catch (error) {
    throw new Error('Не удалось распознать ссылку, проверьте правильность заполнения поля')
  }
}

function parsepostinfo(data) {
  try {

    const postinfo = data.items[0]
    const groupinfo = data.groups[0]
    const postattachments = data.items[0].attachments

    let attachments = []
  
    if (postattachments) {
      postattachments.forEach((element) => {
        if (element) {
          switch (element.type) {
            case 'video':
              attachments.push({
                type: 'video',
                photo: element.video.image[3].url,
              })
              break
            case 'link':
              attachments.push({
                type: 'link',
                url: element.link.url,
              })
              break
            case 'photo':
              attachments.push({
                type: 'photo',
                photo: element.photo.sizes[element.photo.sizes.length - 1].url,
              })
              break
          }
        }
      })
    }

    let parse = {
      postheader: {
        group_img: groupinfo.photo_200,
        group_name: groupinfo.name,
        ispinned: postinfo.is_pinned,
        publish_time: postinfo.date,
      },
      post_body: {
        text: postinfo.text,
        attachments: attachments,
        post_author: data.profiles[0] ? {
          url: 'https://vk.com/id' + data.profiles[0].id,
          name: `${data.profiles[0].first_name} ${data.profiles[0].last_name}`,
        }:null,
      },
      post_footer: {
        comments_count: postinfo.comments.count,
        likes_count: postinfo.likes.count,
        reposts_count: postinfo.reposts.count,
        views_count: postinfo.views.count,
      },
    }
    return parse
  } catch (error) {
    console.log()
    throw new Error(error.message)
  }
}

module.exports = {
  getpostdata,
  parsepostinfo,
}
