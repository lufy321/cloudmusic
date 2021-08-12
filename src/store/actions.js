import {getLyric} from "../network/songList";
import {phoneLogin, userDetail} from "../network/profile";

const actions = {
  reqLyric(content, id) {
    getLyric(id).then(res => {
      content.commit('setLyric', res)
    })
  },
  async phoneLogin(content, payload) {
    let result = await phoneLogin(payload.phone, payload.password)
    if(result.code == 200) {
      content.state.user.isLogin = true;
      content.state.user.account = result.account

      let accountDetail = await userDetail(result.account.id)
      content.state.user.userDeatil = accountDetail;
      localStorage.userData = JSON.stringify(content.state.user)
      console.log(accountDetail);
      content.commit('setUser', content.state.user)
    }
    return result
  }


}

export default actions