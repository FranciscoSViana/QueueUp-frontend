package com.example.queueup

import android.os.AsyncTask

class GetLoginTask : AsyncTask<String, Void, Login>() {
    override fun doInBackground(vararg params: String?): Login {
        return ClienteLogin.logar().getLogin(params[0]!!)
    }
}