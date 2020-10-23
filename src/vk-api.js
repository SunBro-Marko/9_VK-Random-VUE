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
    const postphoto = data.items[0].attachments[0].photo

    let parse = {
      postheader: {
        group_img: groupinfo.photo_200,
        group_name: groupinfo.name,
        ispinned: postinfo.is_pinned,
        publish_time: postinfo.date,
      },
      post_body: {
        text: postinfo.text,
        attacments: {
          photo: postphoto.sizes[postphoto.sizes.length - 1].url,
        },
        post_author: {
          url: 'https://vk.com/id' + data.profiles[0].id,
          name: `${data.profiles[0].first_name} ${data.profiles[0].last_name}`,
        },
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
    throw new Error('Не удалось обработать содержимое поста, попробуйте ещё раз...')
  }
}

module.exports = {
  getpostdata,
  parsepostinfo,
}
