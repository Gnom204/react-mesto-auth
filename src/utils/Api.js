export class Api {
    constructor(options) {
        this._options = options
        this._token = this._options.headers.authorization
        this._url = this._options.baseUrl
    }
    loadingUserInfo() {
        return fetch(this._url + '/users/me', {
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleError(res))

    }

    loadingCard() {
        return fetch(this._url + '/cards', {
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleError(res))
    }

    refreshProfileData(name, about) {
        return fetch(this._url + '/users/me', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: `${name}`,
                about: `${about}`
            })
        })
            .then(res => this._handleError(res))
    }
    addCardOnServer(cardName, cardLink) {
        return fetch(this._url + '/cards', {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: `${cardName}`,
                link: `${cardLink}`
            })
        })
            .then(res => this._handleError(res))
    }
    deleteCard(cardId) {
        return fetch(this._url + `/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleError(res))
    }
    changeLikeCardStatus(cardId, isLiked) {
        return fetch(this._url + `/cards/${cardId}/likes`, {
            method: `${isLiked ? 'DELETE' : 'PUT'}`,
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleError(res))
    }
    changeAvatar(url) {
        return fetch(this._url + '/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: `${url}`
            })
        })
            .then(res => this._handleError(res));
    }
    _handleError(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
    headers: {
        authorization: 'cf1f2fd8-5312-427b-b17f-83a02fd1127b',
        'Content-Type': 'application/json'
    }
});
export default api