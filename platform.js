(function (_0x4b8f7d, _0x19aef8) {
    const _0xc07236 = _0x3c7a, _0x2de2d2 = _0x4b8f7d();
    while (!![]) {
        try {
            const _0x3a8f33 = parseInt(_0xc07236(0x1d8)) / 0x1 + parseInt(_0xc07236(0x1d9)) / 0x2 + parseInt(_0xc07236(0x1da)) / 0x3 + parseInt(_0xc07236(0x1db)) / 0x4 * (parseInt(_0xc07236(0x1dc)) / 0x5) + -parseInt(_0xc07236(0x1dd)) / 0x6 + parseInt(_0xc07236(0x1de)) / 0x7 + -parseInt(_0xc07236(0x1df)) / 0x8;
            if (_0x3a8f33 === _0x19aef8)
                break;
            else
                _0x2de2d2['push'](_0x2de2d2['shift']());
        } catch (_0x43ea0e) {
            _0x2de2d2['push'](_0x2de2d2['shift']());
        }
    }
}(_0x5e37, 0x2e7e6), !function () {
    const _0x586fed = _0x3c7a;
    class _0x112809 {
        constructor() {
            const _0x257f7c = _0x3c7a;
            this['beEnabled'] = ![], this[_0x257f7c(0x1e0)] = ![], this[_0x257f7c(0x1e1)] = ![], this['bePauseMusic'] = ![], this[_0x257f7c(0x1e2)] = -0x1, this[_0x257f7c(0x1e3)] = ![], this[_0x257f7c(0x1e4)] = ![];
        }
        [_0x586fed(0x1e5)]() {
            return new Promise((_0x491a3c, _0x28480d) => {
                const _0x42826b = _0x3c7a;
                try {
                    this[_0x42826b(0x1e6)] = new _0x4e02f4(), this[_0x42826b(0x1e7)] = new _0x4e02f4(), window[_0x42826b(0x1e8)][_0x42826b(0x1e9)](_0x42826b(0x1ea), () => {
                        setTimeout(() => {
                            const _0x1e46da = _0x3c7a;
                            if (this['adShowing']) {
                            } else
                                this[_0x1e46da(0x1eb)]();
                        }, 0x64);
                    }, !![]), window[_0x42826b(0x1e8)][_0x42826b(0x1e9)](_0x42826b(0x1ec), () => {
                        setTimeout(() => {
                            const _0x2657d8 = _0x3c7a;
                            if (this[_0x2657d8(0x1e4)]) {
                            } else
                                this['tryToResumeAudioContext']();
                        }, 0x64);
                    }, !![]), window[_0x42826b(0x1e8)][_0x42826b(0x1e9)](_0x42826b(0x1ed), this[_0x42826b(0x1ee)][_0x42826b(0x1ef)](this)), this['musicAudio'][_0x42826b(0x1f0)]()[_0x42826b(0x1f1)] = this[_0x42826b(0x1f2)][_0x42826b(0x1ef)](this), this[_0x42826b(0x1e7)][_0x42826b(0x1f0)]()[_0x42826b(0x1f1)] = this[_0x42826b(0x1f3)][_0x42826b(0x1ef)](this), this[_0x42826b(0x1f4)] = !![], this[_0x42826b(0x1f5)] = 0x3c, this[_0x42826b(0x1f6)] = ![], this[_0x42826b(0x1eb)](), _0x491a3c(!![]);
                } catch (_0x7c2e37) {
                    console[_0x42826b(0x1f7)](_0x42826b(0x1f8), _0x7c2e37), alert('Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser'), _0x491a3c(![]);
                }
            });
        }
        ['onVisibilitychange']() {
            const _0x235299 = _0x586fed;
            if (this['adShowing'])
                return;
            if (document['visibilityState'] == 'hidden')
                !this['isMuted'] && (this[_0x235299(0x1e3)] = this['muted'] = !![]), Laya[_0x235299(0x1f9)]['scale'] = 0x0, Laya['stage'][_0x235299(0x1fa)] = ![], Laya[_0x235299(0x1fb)] && Laya[_0x235299(0x1fb)][_0x235299(0x1fc)](), Laya[_0x235299(0x1fd)] && Laya[_0x235299(0x1fd)]['pause']();
            else
                document[_0x235299(0x1fe)] == 'visible' && (this[_0x235299(0x1e3)] && (this[_0x235299(0x1e3)] = this['muted'] = ![]), Laya['timer'][_0x235299(0x1ff)] = 0x1, Laya['stage'][_0x235299(0x1fa)] = !![], Laya[_0x235299(0x1fb)] && Laya[_0x235299(0x1fb)][_0x235299(0x200)](), Laya['physicsTimer'] && Laya[_0x235299(0x1fd)][_0x235299(0x200)]());
        }
        [_0x586fed(0x201)]() {
        }
        [_0x586fed(0x1eb)]() {
            const _0x3e122e = _0x586fed;
            if (this['adShowing'])
                return;
            if (this[_0x3e122e(0x1e0)])
                return;
            this[_0x3e122e(0x1e6)][_0x3e122e(0x202)]() && !this[_0x3e122e(0x203)] && (this['musicAudio'][_0x3e122e(0x200)](), this[_0x3e122e(0x1e6)][_0x3e122e(0x204)] && this[_0x3e122e(0x1e6)][_0x3e122e(0x205)](this[_0x3e122e(0x1e6)]['_music'][_0x3e122e(0x206)])), this[_0x3e122e(0x1e7)]['isSuspend']() && !this['bePauseSound'] && this[_0x3e122e(0x1e7)][_0x3e122e(0x200)](), (!this[_0x3e122e(0x1e6)][_0x3e122e(0x202)]() || !this['soundAudio']['isSuspend']()) && (window[_0x3e122e(0x1e8)][_0x3e122e(0x207)](_0x3e122e(0x1ea), this[_0x3e122e(0x1eb)][_0x3e122e(0x1ef)](this), !![]), window[_0x3e122e(0x1e8)][_0x3e122e(0x207)](_0x3e122e(0x1ec), this[_0x3e122e(0x1eb)][_0x3e122e(0x1ef)](this), !![]), clearInterval(this[_0x3e122e(0x1e2)]), this['tryToResumeIntervalId'] = -0x1);
        }
        [_0x586fed(0x1f2)]() {
            const _0x5682d1 = _0x586fed;
            this[_0x5682d1(0x1e6)]['isSuspend']() && !this[_0x5682d1(0x1e0)] && !this[_0x5682d1(0x203)] && this['tryToResumeIntervalId'] === -0x1 && (window[_0x5682d1(0x1e8)][_0x5682d1(0x1e9)](_0x5682d1(0x1ea), this[_0x5682d1(0x1eb)][_0x5682d1(0x1ef)](this), !![]), window[_0x5682d1(0x1e8)][_0x5682d1(0x1e9)](_0x5682d1(0x1ec), this['tryToResumeAudioContext'][_0x5682d1(0x1ef)](this), !![]), this[_0x5682d1(0x1e2)] = setInterval(this[_0x5682d1(0x1eb)][_0x5682d1(0x1ef)](this), 0xc8));
        }
        [_0x586fed(0x1f3)]() {
            const _0x4e4a9f = _0x586fed;
            this['soundAudio'][_0x4e4a9f(0x202)]() && !this[_0x4e4a9f(0x1e0)] && !this[_0x4e4a9f(0x1e1)] && this['tryToResumeIntervalId'] === -0x1 && (window['document'][_0x4e4a9f(0x1e9)](_0x4e4a9f(0x1ea), this[_0x4e4a9f(0x1eb)][_0x4e4a9f(0x1ef)](this), !![]), window['document']['addEventListener'](_0x4e4a9f(0x1ec), this['tryToResumeAudioContext'][_0x4e4a9f(0x1ef)](this), !![]), this[_0x4e4a9f(0x1e2)] = setInterval(this[_0x4e4a9f(0x1eb)][_0x4e4a9f(0x1ef)](this), 0xc8));
        }
        set [_0x586fed(0x208)](_0x29d8b0) {
            const _0x3a7e1a = _0x586fed;
            this[_0x3a7e1a(0x1e0)] = _0x29d8b0, this['isMuted'] ? (this[_0x3a7e1a(0x1e6)]['suspend'](), this[_0x3a7e1a(0x1e7)][_0x3a7e1a(0x209)]()) : this[_0x3a7e1a(0x1e2)] == -0x1 && (this[_0x3a7e1a(0x1e2)] = setInterval(this['tryToResumeAudioContext'][_0x3a7e1a(0x1ef)](this), 0xc8));
        }
        get [_0x586fed(0x208)]() {
            const _0x2cc2bc = _0x586fed;
            return this[_0x2cc2bc(0x1e0)];
        }
        set ['pause'](_0x2ce88b) {
            const _0x5583fa = _0x586fed;
            this[_0x5583fa(0x20a)] = _0x2ce88b, this[_0x5583fa(0x20b)] = _0x2ce88b, !_0x2ce88b && this['soundAudio'][_0x5583fa(0x20c)]();
        }
        get [_0x586fed(0x1fc)]() {
            const _0x59bab5 = _0x586fed;
            return this[_0x59bab5(0x20a)] || this[_0x59bab5(0x20b)];
        }
        set [_0x586fed(0x20a)](_0x5c55b9) {
            const _0x55e283 = _0x586fed;
            this[_0x55e283(0x1e1)] = _0x5c55b9;
            if (this[_0x55e283(0x1e1)])
                this[_0x55e283(0x1e7)]['suspend']();
            else {
                if (this[_0x55e283(0x1e0)])
                    return;
                this[_0x55e283(0x1e7)][_0x55e283(0x200)]();
            }
        }
        get [_0x586fed(0x20a)]() {
            const _0x40d236 = _0x586fed;
            return this[_0x40d236(0x1e1)];
        }
        get [_0x586fed(0x20b)]() {
            return this['bePauseMusic'];
        }
        set [_0x586fed(0x20b)](_0x2d84de) {
            const _0x1aad1d = _0x586fed;
            this[_0x1aad1d(0x203)] = _0x2d84de;
            if (this[_0x1aad1d(0x203)])
                this[_0x1aad1d(0x1e6)][_0x1aad1d(0x209)]();
            else {
                if (this[_0x1aad1d(0x1e0)])
                    return;
                this[_0x1aad1d(0x1e6)][_0x1aad1d(0x200)]();
            }
        }
        [_0x586fed(0x20d)]() {
            const _0x312d29 = _0x586fed;
            this['musicAudio']['stopAll'](), this[_0x312d29(0x1e7)][_0x312d29(0x20d)]();
        }
        [_0x586fed(0x20e)](_0x7b9da7, _0x46ce18, _0xe15e76) {
            const _0x5af98a = _0x586fed;
            this['soundAudio'][_0x5af98a(0x20e)](_0x7b9da7, _0x46ce18);
        }
        ['playMusic'](_0x224832) {
            const _0x595293 = _0x586fed;
            this[_0x595293(0x1e6)][_0x595293(0x20d)](), this[_0x595293(0x1e6)][_0x595293(0x205)](_0x224832);
        }
        [_0x586fed(0x20f)]() {
            const _0x3948d1 = _0x586fed;
            this[_0x3948d1(0x1e6)][_0x3948d1(0x20d)]();
        }
        [_0x586fed(0x210)](_0x3935d6) {
            const _0x493e69 = _0x586fed;
            this[_0x493e69(0x1e7)][_0x493e69(0x211)](_0x3935d6);
        }
        set [_0x586fed(0x1f5)](_0x29856a) {
            const _0x32fcc2 = _0x586fed;
            this[_0x32fcc2(0x1e6)]['musicVolume'] = _0x29856a;
        }
        get [_0x586fed(0x1f5)]() {
            const _0x43a7e9 = _0x586fed;
            return this[_0x43a7e9(0x1e6)][_0x43a7e9(0x1f5)];
        }
        [_0x586fed(0x212)](_0x47e59d, _0x3a5fe4 = ![], _0x152754 = ![]) {
            const _0x43f18e = _0x586fed;
            if (!this[_0x43f18e(0x1f4)])
                return;
            this[_0x43f18e(0x1e7)][_0x43f18e(0x213)](_0x47e59d, _0x3a5fe4, _0x152754);
        }
    }
    class _0x38162b {
    }
    class _0x4e02f4 {
        constructor() {
            const _0x43b996 = _0x586fed;
            this['volume'] = 0x64, this['_audioInstances'] = new Map(), this[_0x43b996(0x214)] = 0x64, window[_0x43b996(0x215)] = window[_0x43b996(0x215)] || window[_0x43b996(0x216)], this['context'] = new AudioContext();
        }
        [_0x586fed(0x1f0)]() {
            const _0xc3ffd9 = _0x586fed;
            return this[_0xc3ffd9(0x217)];
        }
        [_0x586fed(0x202)]() {
            const _0xa18e12 = _0x586fed;
            return this[_0xa18e12(0x217)][_0xa18e12(0x218)] === _0xa18e12(0x219);
        }
        ['suspend']() {
            const _0x19ff01 = _0x586fed;
            return this[_0x19ff01(0x217)]['suspend']();
        }
        [_0x586fed(0x200)]() {
            const _0x20fd3b = _0x586fed;
            return this[_0x20fd3b(0x217)][_0x20fd3b(0x200)]();
        }
        [_0x586fed(0x20c)]() {
            const _0xe65959 = _0x586fed, _0x332e13 = this[_0xe65959(0x21a)][_0xe65959(0x21b)]();
            for (const _0x18349b of _0x332e13) {
                const _0x34a4a2 = _0x18349b['instance'];
                if (_0x34a4a2['source'][_0xe65959(0x21c)] && !_0x34a4a2[_0xe65959(0x21d)]['loop']) {
                    try {
                        _0x34a4a2[_0xe65959(0x21d)][_0xe65959(0x211)](this[_0xe65959(0x217)][_0xe65959(0x21e)]);
                    } catch (_0x4454af) {
                        _0x34a4a2[_0xe65959(0x21d)][_0xe65959(0x21f)]();
                    }
                    _0x34a4a2['source'][_0xe65959(0x220)] = function () {
                    }, _0x34a4a2[_0xe65959(0x221)]();
                }
            }
        }
        ['stopAll']() {
            const _0x4b836f = _0x586fed, _0x29332e = this[_0x4b836f(0x21a)]['values']();
            for (const _0x387b1e of _0x29332e) {
                const _0x3362f3 = _0x387b1e[_0x4b836f(0x222)];
                if (_0x3362f3[_0x4b836f(0x21d)][_0x4b836f(0x21c)]) {
                    try {
                        _0x3362f3['source']['stop'](this[_0x4b836f(0x217)][_0x4b836f(0x21e)]);
                    } catch (_0x511295) {
                        _0x3362f3[_0x4b836f(0x21d)]['disconnect']();
                    }
                    _0x3362f3[_0x4b836f(0x21d)][_0x4b836f(0x220)] = function () {
                    }, _0x3362f3['setup']();
                }
            }
        }
        [_0x586fed(0x211)](_0x1f8d27) {
            const _0xa54d20 = _0x586fed;
            if (this[_0xa54d20(0x21a)][_0xa54d20(0x223)](_0x1f8d27)) {
                const _0x29b0e4 = this[_0xa54d20(0x21a)][_0xa54d20(0x224)](_0x1f8d27);
                this['_stopSound'](_0x29b0e4);
            }
        }
        [_0x586fed(0x225)](_0x151357) {
            const _0x4248d1 = _0x586fed, _0x447ce5 = _0x151357['instance'];
            if (_0x447ce5[_0x4248d1(0x21d)]['buffer']) {
                try {
                    _0x447ce5[_0x4248d1(0x21d)]['stop'](this['context'][_0x4248d1(0x21e)]);
                } catch (_0x1a7c37) {
                    _0x447ce5['source'][_0x4248d1(0x21f)]();
                }
                _0x447ce5['source'][_0x4248d1(0x220)] = function () {
                }, _0x447ce5['setup']();
            }
        }
        [_0x586fed(0x205)](_0x3a2de2) {
            const _0x4ecb35 = _0x586fed;
            this[_0x4ecb35(0x204)] && this[_0x4ecb35(0x225)](this[_0x4ecb35(0x204)]), this[_0x4ecb35(0x21a)]['has'](_0x3a2de2) ? (this[_0x4ecb35(0x204)] = this[_0x4ecb35(0x21a)][_0x4ecb35(0x224)](_0x3a2de2), this[_0x4ecb35(0x1f5)] = this[_0x4ecb35(0x214)], this[_0x4ecb35(0x213)](_0x3a2de2, !![])) : this[_0x4ecb35(0x226)](_0x3a2de2, () => {
                const _0x47bc90 = _0x4ecb35;
                this[_0x47bc90(0x205)](_0x3a2de2);
            });
        }
        [_0x586fed(0x20f)]() {
            const _0x46fbbf = _0x586fed;
            this[_0x46fbbf(0x204)] && this[_0x46fbbf(0x225)](this['_music']);
        }
        set [_0x586fed(0x1f5)](_0x335e98) {
            const _0xf4813b = _0x586fed;
            this[_0xf4813b(0x214)] = _0x335e98, this[_0xf4813b(0x204)] && (this[_0xf4813b(0x204)][_0xf4813b(0x222)]['gain']['gain'][_0xf4813b(0x227)] = this[_0xf4813b(0x214)] / 0x64);
        }
        get [_0x586fed(0x1f5)]() {
            return this['_musicVolume'];
        }
        [_0x586fed(0x213)](_0x41f8f3, _0x256405 = ![], _0x55796c = ![]) {
            const _0x379253 = _0x586fed;
            if (this[_0x379253(0x21a)][_0x379253(0x223)](_0x41f8f3)) {
                const _0x599d4e = this[_0x379253(0x21a)][_0x379253(0x224)](_0x41f8f3), _0x3e123b = _0x599d4e[_0x379253(0x222)];
                if (_0x55796c && !_0x3e123b[_0x379253(0x228)])
                    return;
                this[_0x379253(0x211)](_0x41f8f3);
                if (_0x599d4e[_0x379253(0x21c)])
                    try {
                        if (window[_0x379253(0x229)][_0x379253(0x1fc)] && !_0x256405)
                            return;
                        _0x3e123b[_0x379253(0x22a)](this[_0x379253(0x217)][_0x379253(0x21e)], _0x599d4e[_0x379253(0x21c)]), _0x3e123b[_0x379253(0x21d)]['loop'] = _0x256405;
                    } catch (_0x5c023b) {
                        console['error'](_0x379253(0x22b) + _0x5c023b);
                    }
            } else
                this['downloadArrayBuffer'](_0x41f8f3, () => {
                    this['play'](_0x41f8f3, _0x256405);
                });
        }
        [_0x586fed(0x22c)](_0xbd45af, _0x2f443f) {
            const _0x152c4b = _0x586fed;
            let _0x48b5a6 = _0xbd45af['length'], _0x4bcf2c = 0x0;
            for (let _0x21733c = 0x0; _0x21733c < _0xbd45af[_0x152c4b(0x22d)]; _0x21733c++) {
                const _0x4348b3 = _0xbd45af[_0x21733c];
                this[_0x152c4b(0x226)](_0x4348b3, () => {
                    _0x4bcf2c++, _0x4bcf2c >= _0x48b5a6 && (_0x2f443f && _0x2f443f());
                });
            }
        }
        [_0x586fed(0x22e)](_0x433568) {
            const _0x356ec2 = _0x586fed;
            if (this['_audioInstances'][_0x356ec2(0x223)](_0x433568)) {
                const _0x564c02 = this[_0x356ec2(0x21a)][_0x356ec2(0x224)](_0x433568);
                _0x564c02[_0x356ec2(0x222)][_0x356ec2(0x22f)] = !![];
            }
        }
        ['createSoundInstance']() {
            const _0x5c1dc9 = _0x586fed;
            let _0x28af2b = this[_0x5c1dc9(0x217)];
            const _0x2ebe5f = {
                'gain': _0x28af2b[_0x5c1dc9(0x230)](),
                'panner': _0x28af2b[_0x5c1dc9(0x231)](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x33807e, _0x7dfee3, _0x17cc7a) {
                    const _0x2917c0 = _0x5c1dc9;
                    this['source'][_0x2917c0(0x21c)] = _0x7dfee3;
                    var _0x232a22 = this;
                    this['ended'] = ![], this[_0x2917c0(0x21d)]['onended'] = function () {
                        const _0x5f471d = _0x2917c0;
                        _0x232a22[_0x5f471d(0x221)](), _0x232a22[_0x5f471d(0x228)] = !![];
                    }, this[_0x2917c0(0x21d)][_0x2917c0(0x232)](_0x33807e, _0x17cc7a);
                },
                'setup': function () {
                    const _0xe3bf2d = _0x5c1dc9;
                    this[_0xe3bf2d(0x21d)] = _0x28af2b[_0xe3bf2d(0x233)](), this[_0xe3bf2d(0x234)]();
                },
                'setupPanning': function () {
                    const _0x85cc8d = _0x5c1dc9;
                    this[_0x85cc8d(0x22f)] ? (this[_0x85cc8d(0x21d)][_0x85cc8d(0x21f)](), this[_0x85cc8d(0x21d)][_0x85cc8d(0x235)](this[_0x85cc8d(0x236)]), this[_0x85cc8d(0x236)]['connect'](this['gain'])) : (this['panner'][_0x85cc8d(0x21f)](), this[_0x85cc8d(0x21d)][_0x85cc8d(0x235)](this[_0x85cc8d(0x237)]));
                }
            };
            return _0x2ebe5f[_0x5c1dc9(0x236)][_0x5c1dc9(0x238)] = 0x0, _0x2ebe5f[_0x5c1dc9(0x237)][_0x5c1dc9(0x235)](this['context'][_0x5c1dc9(0x239)]), _0x2ebe5f[_0x5c1dc9(0x221)](), _0x2ebe5f;
        }
        [_0x586fed(0x20e)](_0x5302e0, _0x550dab, _0x138a3d) {
            const _0x5d6897 = _0x586fed, _0xa29dc = new _0x38162b();
            _0xa29dc[_0x5d6897(0x206)] = _0x5302e0, _0xa29dc[_0x5d6897(0x222)] = this[_0x5d6897(0x23a)](), this[_0x5d6897(0x21a)]['set'](_0x5302e0, _0xa29dc), this[_0x5d6897(0x217)]['decodeAudioData'](_0x550dab, function (_0x37ef12) {
                const _0x1f1292 = _0x5d6897;
                _0xa29dc[_0x1f1292(0x21c)] = _0x37ef12, _0x138a3d && _0x138a3d();
            }, function (_0x2f3118) {
                const _0x34afc8 = _0x5d6897;
                _0xa29dc['error'] = !![], _0x138a3d && _0x138a3d(), console[_0x34afc8(0x1f7)](_0x34afc8(0x23b) + _0xa29dc[_0x34afc8(0x206)]);
            });
        }
        ['downloadArrayBuffer'](_0x56ac6f, _0x24a639) {
            const _0x2eeeeb = _0x586fed;
            if (this[_0x2eeeeb(0x21a)]['has'](_0x56ac6f)) {
                _0x24a639 && _0x24a639();
                return;
            }
            const _0x29e50b = this;
            var _0x2a3617 = new XMLHttpRequest();
            _0x2a3617['open'](_0x2eeeeb(0x23c), _0x56ac6f, !![]), _0x2a3617[_0x2eeeeb(0x23d)] = _0x2eeeeb(0x23e), _0x2a3617[_0x2eeeeb(0x23f)] = function () {
                const _0x31d529 = _0x2eeeeb;
                if (_0x2a3617[_0x31d529(0x240)] === 0xc8 || _0x2a3617[_0x31d529(0x240)] === 0x0)
                    _0x29e50b['parse'](_0x56ac6f, _0x2a3617['response'], _0x24a639);
                else
                    throw _0x31d529(0x241);
            }, _0x2a3617[_0x2eeeeb(0x242)] = function () {
                const _0x4e9ab = _0x2eeeeb;
                _0x24a639 && _0x24a639();
                throw _0x4e9ab(0x241);
            }, _0x2a3617[_0x2eeeeb(0x243)] = function () {
                _0x24a639 && _0x24a639();
            }, _0x2a3617[_0x2eeeeb(0x244)] = function () {
                _0x24a639 && _0x24a639();
            }, _0x2a3617['send'](null);
        }
    }
    const _0x28be8c = window['WebAudioEngine'] = new _0x112809();
    class _0x18937c {
        constructor() {
            const _0x22dd83 = _0x586fed;
            this['canNavigateActive_'] = ![], this[_0x22dd83(0x245)] = '', this[_0x22dd83(0x246)] = '', this[_0x22dd83(0x247)] = '', this[_0x22dd83(0x248)] = null, this['initialized_'] = ![], this[_0x22dd83(0x249)] = !![], this[_0x22dd83(0x24a)]();
        }
        static [_0x586fed(0x24b)]() {
            const _0x12b1dd = _0x586fed;
            return !this[_0x12b1dd(0x24c)] && (this[_0x12b1dd(0x24c)] = new _0x18937c()), this['_instance'];
        }
        [_0x586fed(0x24a)]() {
            const _0x2ec3bd = _0x586fed;
            let _0x39ba01 = document['getElementById']('layaCanvas');
            _0x39ba01 && (_0x39ba01[_0x2ec3bd(0x1e9)](_0x2ec3bd(0x24d), this[_0x2ec3bd(0x24e)][_0x2ec3bd(0x1ef)](this)), _0x39ba01['addEventListener'](_0x2ec3bd(0x24f), this[_0x2ec3bd(0x24e)][_0x2ec3bd(0x1ef)](this)));
        }
        [_0x586fed(0x24e)]() {
            const _0x296686 = _0x586fed;
            this[_0x296686(0x250)] && YYGGames[_0x296686(0x251)](this[_0x296686(0x245)], this[_0x296686(0x246)], this[_0x296686(0x247)]), this['canNavigateActive_'] = ![];
        }
        [_0x586fed(0x252)](_0x5a5641) {
            const _0x190440 = _0x586fed;
            let _0x16b0ad = null;
            try {
                let _0x14dbd7 = Laya[_0x190440(0x253)][_0x190440(0x254)](_0x5a5641);
                _0x16b0ad = JSON['parse'](_0x14dbd7);
            } catch (_0x541208) {
            }
            return _0x16b0ad;
        }
        [_0x586fed(0x255)](_0x1107fc, _0x33af28) {
            const _0x48a7ce = _0x586fed;
            return Laya[_0x48a7ce(0x253)][_0x48a7ce(0x256)](_0x1107fc, JSON[_0x48a7ce(0x257)](_0x33af28));
        }
        [_0x586fed(0x251)](_0x42d50e, _0x206b70, _0x4ac746) {
            const _0x4e1d63 = _0x586fed;
            this['canNavigateActive_'] === ![] && (this[_0x4e1d63(0x245)] = _0x42d50e, this[_0x4e1d63(0x246)] = _0x206b70, this[_0x4e1d63(0x247)] = _0x4ac746, this[_0x4e1d63(0x250)] = !![]);
        }
        [_0x586fed(0x258)]() {
            setTimeout(() => {
                const _0x2829f6 = _0x3c7a;
                _0x28be8c[_0x2829f6(0x208)] = !![];
            }, 0x64);
        }
        [_0x586fed(0x259)]() {
            setTimeout(() => {
                const _0x1c8565 = _0x3c7a;
                _0x28be8c[_0x1c8565(0x208)] = ![];
            }, 0x64);
        }
        [_0x586fed(0x25a)](_0x2bf8f7) {
            YYGGames['showInterstitial']({
                'beforeShowAd': () => {
                    const _0x79254f = _0x3c7a;
                    window[_0x79254f(0x229)][_0x79254f(0x1e4)] = !![], this[_0x79254f(0x258)](), Laya[_0x79254f(0x1f9)]['scale'] = 0x0, Laya[_0x79254f(0x25b)]['renderingEnabled'] = ![], Laya[_0x79254f(0x1fb)] && Laya[_0x79254f(0x1fb)][_0x79254f(0x1fc)](), Laya[_0x79254f(0x1fd)] && Laya[_0x79254f(0x1fd)]['pause']();
                },
                'afterShowAd': () => {
                    const _0x54f092 = _0x3c7a;
                    window[_0x54f092(0x25c)](), this[_0x54f092(0x259)](), window['WebAudioEngine'][_0x54f092(0x1e4)] = ![], Laya['timer']['scale'] = 0x1, Laya['stage'][_0x54f092(0x1fa)] = !![], Laya['updateTimer'] && Laya[_0x54f092(0x1fb)]['resume'](), Laya[_0x54f092(0x1fd)] && Laya[_0x54f092(0x1fd)]['resume'](), _0x2bf8f7 && _0x2bf8f7();
                }
            });
        }
        ['showReward'](_0x86b31d, _0x416f28, _0x2b96b8) {
            const _0x4e0d81 = _0x586fed;
            if (!YYGGames[_0x4e0d81(0x25d)]()) {
                this[_0x4e0d81(0x25e)](_0x4e0d81(0x25f)), _0x2b96b8 && _0x2b96b8();
                return;
            }
            YYGGames[_0x4e0d81(0x260)]({
                'beforeShowAd': () => {
                    const _0xa6f137 = _0x4e0d81;
                    window[_0xa6f137(0x229)][_0xa6f137(0x1e4)] = !![], this[_0xa6f137(0x258)](), Laya[_0xa6f137(0x1f9)][_0xa6f137(0x1ff)] = 0x0, Laya[_0xa6f137(0x25b)][_0xa6f137(0x1fa)] = ![], Laya[_0xa6f137(0x1fb)] && Laya[_0xa6f137(0x1fb)]['pause'](), Laya[_0xa6f137(0x1fd)] && Laya[_0xa6f137(0x1fd)]['pause']();
                },
                'afterShowAd': () => {
                    const _0x8d5afe = _0x4e0d81;
                    window['focus'](), this[_0x8d5afe(0x259)](), window['WebAudioEngine'][_0x8d5afe(0x1e4)] = ![], Laya['timer'][_0x8d5afe(0x1ff)] = 0x1, Laya[_0x8d5afe(0x25b)][_0x8d5afe(0x1fa)] = !![], Laya[_0x8d5afe(0x1fb)] && Laya[_0x8d5afe(0x1fb)][_0x8d5afe(0x200)](), Laya[_0x8d5afe(0x1fd)] && Laya['physicsTimer']['resume']();
                },
                'rewardComplete': () => {
                    _0x86b31d && _0x86b31d(), _0x2b96b8 && _0x2b96b8(), _0x2b96b8 = null, _0x86b31d = null;
                },
                'rewardDismissed': () => {
                    const _0x4f180c = _0x4e0d81;
                    _0x416f28 && (_0x416f28(), _0x2b96b8 && _0x2b96b8(), _0x2b96b8 = null, _0x416f28 = null), this[_0x4f180c(0x25e)](_0x4f180c(0x261));
                }
            });
        }
        [_0x586fed(0x262)](_0x5c5363) {
        }
        ['prompt'](_0x2e0528, _0x244a56) {
            const _0x20dc7a = _0x586fed;
            !this[_0x20dc7a(0x248)] && (this[_0x20dc7a(0x248)] = document[_0x20dc7a(0x263)](_0x20dc7a(0x264)), this[_0x20dc7a(0x248)][_0x20dc7a(0x265)][_0x20dc7a(0x266)] = _0x20dc7a(0x267), document[_0x20dc7a(0x268)][_0x20dc7a(0x269)](this['prompt_']));
            const _0x12de3d = Laya[_0x20dc7a(0x25b)]['designWidth'], _0xe64140 = Laya[_0x20dc7a(0x25b)][_0x20dc7a(0x26a)];
            var _0x3a876d = window[_0x20dc7a(0x26b)], _0x2d4f5a = window[_0x20dc7a(0x26c)], _0x4b358b, _0x17cc6e;
            _0x3a876d / _0x2d4f5a > _0x12de3d / _0xe64140 ? (_0x4b358b = _0x2d4f5a, _0x17cc6e = _0x4b358b * _0x12de3d / _0xe64140) : (_0x17cc6e = _0x3a876d, _0x4b358b = _0x17cc6e * _0xe64140 / _0x12de3d), this[_0x20dc7a(0x248)][_0x20dc7a(0x265)][_0x20dc7a(0x26d)] = _0x17cc6e - 0x32 + 'px', this[_0x20dc7a(0x248)]['innerHTML'] = _0x2e0528, _0x244a56 = isNaN(_0x244a56) ? 0x7d0 : _0x244a56, this['prompt_'][_0x20dc7a(0x265)]['display'] = _0x20dc7a(0x26e), this[_0x20dc7a(0x248)][_0x20dc7a(0x265)]['opacity'] = '1', setTimeout(function () {
                const _0x6a099b = _0x20dc7a;
                var _0x4a59c2 = 0.5;
                this[_0x6a099b(0x248)][_0x6a099b(0x265)]['webkitTransition'] = _0x6a099b(0x26f) + _0x4a59c2 + _0x6a099b(0x270) + _0x4a59c2 + _0x6a099b(0x271), this[_0x6a099b(0x248)][_0x6a099b(0x265)][_0x6a099b(0x272)] = '0', this[_0x6a099b(0x248)][_0x6a099b(0x265)][_0x6a099b(0x273)] = _0x6a099b(0x274);
            }['bind'](this), _0x244a56);
        }
        ['getForgames']() {
            const _0x1e9487 = _0x586fed;
            let _0xfd3509 = YYGGames[_0x1e9487(0x275)] || [], _0x3c34b5 = _0xfd3509[_0x1e9487(0x276)]();
            for (let _0x165978 = 0x0, _0x53b642 = _0x3c34b5[_0x1e9487(0x22d)]; _0x165978 < _0x53b642; _0x165978++) {
                const _0x415558 = Math[_0x1e9487(0x277)](Math['random']() * (_0x165978 + 0x1)), _0x155e60 = _0x3c34b5[_0x415558];
                _0x3c34b5[_0x415558] = _0x3c34b5[_0x165978], _0x3c34b5[_0x165978] = _0x155e60;
            }
            return _0x3c34b5;
        }
        [_0x586fed(0x278)]() {
            const _0x1798cb = _0x586fed;
            if (!Laya || !Laya[_0x1798cb(0x279)])
                return null;
            if (!window['yad']) {
                const _0x350afd = new Laya[(_0x1798cb(0x279))]();
                _0x350afd[_0x1798cb(0x27a)] = _0x1798cb(0x27b), _0x350afd[_0x1798cb(0x27c)] = 0x30d40, _0x350afd['left'] = 0x0, _0x350afd['scale'](0.7, 0.7), window['yad'] = _0x350afd;
            }
            return window[_0x1798cb(0x27d)];
        }
        ['yadstartup'](_0x58002c, _0x27e5d2) {
            const _0x2d6bf3 = _0x586fed;
            !this[_0x2d6bf3(0x249)] && (_0x27e5d2 && _0x27e5d2());
            if (this['initialized_'])
                return;
            _0x18937c['getInstance']()[_0x2d6bf3(0x27e)](), _0x18937c[_0x2d6bf3(0x24b)]()[_0x2d6bf3(0x278)](), this['createNoVideo'](), this['createLoading'](), window[_0x2d6bf3(0x229)][_0x2d6bf3(0x1e5)]()['then'](() => {
                const _0x210295 = _0x2d6bf3;
                Laya[_0x210295(0x27f)][_0x210295(0x205)] = function (_0x23b9ff) {
                    const _0x6ce75c = _0x210295;
                    window[_0x6ce75c(0x229)] && window['WebAudioEngine'][_0x6ce75c(0x205)](_0x23b9ff);
                }, Laya[_0x210295(0x27f)][_0x210295(0x212)] = function (_0x2cbf4c, _0x26a4f8 = ![]) {
                    const _0x2c7caa = _0x210295;
                    window['WebAudioEngine'] && window[_0x2c7caa(0x229)][_0x2c7caa(0x212)](_0x2cbf4c);
                }, Laya[_0x210295(0x27f)][_0x210295(0x20f)] = function () {
                    const _0x1adfac = _0x210295;
                    window[_0x1adfac(0x229)] && window[_0x1adfac(0x229)]['stopMusic']();
                }, Laya['SoundManager'][_0x210295(0x210)] = function (_0x4eb452) {
                    const _0x2281a6 = _0x210295;
                    window[_0x2281a6(0x229)] && window['WebAudioEngine'][_0x2281a6(0x210)](_0x4eb452);
                };
            }), this[_0x2d6bf3(0x280)] = !![], Laya['loader'][_0x2d6bf3(0x22c)](_0x2d6bf3(0x281), Laya['Handler']['create'](this, _0xa1a093 => {
                const _0x2f0648 = _0x2d6bf3;
                YYGGames[_0x2f0648(0x282)]({
                    'appName': _0x58002c,
                    'config': _0xa1a093,
                    'complete': () => {
                        const _0x173b73 = _0x2f0648, _0x775ab6 = YYGGames[_0x173b73(0x283)]();
                        window[_0x173b73(0x284)] = this[_0x173b73(0x284)](), window['box_adTwo'] = this[_0x173b73(0x285)](), Laya['stage'][_0x173b73(0x286)](window[_0x173b73(0x285)]), Laya['stage'][_0x173b73(0x286)](window[_0x173b73(0x284)]), window[_0x173b73(0x284)]['scaleX'] = 0.86, window[_0x173b73(0x284)]['scaleY'] = 0.86, window[_0x173b73(0x284)][_0x173b73(0x287)] = 0x64, window[_0x173b73(0x285)][_0x173b73(0x287)] = 0xe6, window[_0x173b73(0x285)][_0x173b73(0x288)](0xc8, 0x96), window[_0x173b73(0x285)][_0x173b73(0x289)](0x78), window['scrollList']['visible'] = ![], window[_0x173b73(0x285)][_0x173b73(0x28a)] = ![];
                        switch (_0x775ab6) {
                        case AdPlatformType[_0x173b73(0x28b)]:
                        case AdPlatformType[_0x173b73(0x28c)]:
                            window[_0x173b73(0x27d)] && (window[_0x173b73(0x27d)][_0x173b73(0x1ff)](0x0, 0x0), window[_0x173b73(0x27d)][_0x173b73(0x28d)]());
                            break;
                        default:
                            window[_0x173b73(0x27d)] && Laya[_0x173b73(0x25b)]['addChild'](window[_0x173b73(0x27d)]), window[_0x173b73(0x27d)]['on'](Laya[_0x173b73(0x28e)][_0x173b73(0x28f)], window[_0x173b73(0x27d)], _0x488b3d => {
                                const _0x4bea2b = _0x173b73;
                                _0x488b3d[_0x4bea2b(0x290)](), _0x18937c[_0x4bea2b(0x24b)]()[_0x4bea2b(0x251)]('GAME', 'LOGO');
                            });
                            break;
                        }
                        this[_0x173b73(0x249)] = ![], _0x27e5d2 && _0x27e5d2();
                    }
                });
            }));
        }
        [_0x586fed(0x291)](_0x59eb73) {
            const _0x3913c2 = _0x586fed;
            _0x59eb73 ? YYGGames[_0x3913c2(0x291)](_0x59eb73) : YYGGames[_0x3913c2(0x291)]();
        }
        [_0x586fed(0x292)]() {
            const _0x137e92 = _0x586fed;
            YYGGames[_0x137e92(0x292)]();
        }
        ['showSplash'](_0x3c9be9) {
            const _0x34a578 = _0x586fed;
            _0x3c9be9 ? YYGGames[_0x34a578(0x27e)](_0x3c9be9) : YYGGames[_0x34a578(0x27e)]();
        }
        [_0x586fed(0x293)]() {
            YYGGames['hideSplash']();
        }
        ['cargamesstartup'](_0x1ba927, _0x3ad713) {
            const _0x3cc753 = _0x586fed;
            !this[_0x3cc753(0x249)] && (_0x3ad713 && _0x3ad713());
            if (this[_0x3cc753(0x280)])
                return;
            _0x18937c['getInstance']()[_0x3cc753(0x27e)](), _0x18937c[_0x3cc753(0x24b)]()[_0x3cc753(0x278)](), this[_0x3cc753(0x294)](), this['createLoading'](), window[_0x3cc753(0x229)][_0x3cc753(0x1e5)]()['then'](() => {
                const _0x2ebb43 = _0x3cc753;
                Laya[_0x2ebb43(0x27f)][_0x2ebb43(0x205)] = function (_0x1cc218) {
                    const _0x467804 = _0x2ebb43;
                    window[_0x467804(0x229)] && window[_0x467804(0x229)][_0x467804(0x205)](_0x1cc218);
                }, Laya[_0x2ebb43(0x27f)][_0x2ebb43(0x212)] = function (_0x245b98, _0x55ca34 = ![]) {
                    const _0x594bec = _0x2ebb43;
                    window[_0x594bec(0x229)] && window[_0x594bec(0x229)]['playSound'](_0x245b98);
                }, Laya[_0x2ebb43(0x27f)][_0x2ebb43(0x20f)] = function () {
                    const _0x2a6e12 = _0x2ebb43;
                    window[_0x2a6e12(0x229)] && window[_0x2a6e12(0x229)]['stopMusic']();
                }, Laya[_0x2ebb43(0x27f)][_0x2ebb43(0x210)] = function (_0x1846a1) {
                    const _0x8bccb5 = _0x2ebb43;
                    window[_0x8bccb5(0x229)] && window[_0x8bccb5(0x229)][_0x8bccb5(0x210)](_0x1846a1);
                };
            }), this['initialized_'] = !![], Laya[_0x3cc753(0x295)][_0x3cc753(0x22c)](_0x3cc753(0x281), Laya[_0x3cc753(0x296)][_0x3cc753(0x297)](this, _0x38469d => {
                YYGGames['startupByCargames']({
                    'appName': _0x1ba927,
                    'config': _0x38469d,
                    'complete': () => {
                        const _0x1477f = _0x3c7a, _0x4b956c = YYGGames['getAdPlatformType']();
                        window['scrollList'] = this['scrollList'](), window[_0x1477f(0x285)] = this[_0x1477f(0x285)]();
                        switch (_0x4b956c) {
                        case AdPlatformType[_0x1477f(0x28b)]:
                        case AdPlatformType[_0x1477f(0x28c)]:
                            window[_0x1477f(0x27d)] && (window[_0x1477f(0x27d)][_0x1477f(0x1ff)](0x0, 0x0), window[_0x1477f(0x27d)][_0x1477f(0x28d)]());
                            break;
                        default:
                            window[_0x1477f(0x27d)] && Laya[_0x1477f(0x25b)][_0x1477f(0x286)](window[_0x1477f(0x27d)]), window[_0x1477f(0x27d)]['on'](Laya[_0x1477f(0x28e)][_0x1477f(0x28f)], window[_0x1477f(0x27d)], _0x2371c9 => {
                                const _0x91f666 = _0x1477f;
                                _0x2371c9['stopPropagation'](), _0x18937c[_0x91f666(0x24b)]()[_0x91f666(0x251)](_0x91f666(0x298), _0x91f666(0x299));
                            });
                            break;
                        }
                        this[_0x1477f(0x249)] = ![], _0x3ad713 && _0x3ad713();
                    }
                });
            }));
        }
        [_0x586fed(0x29a)](_0xdd8645, _0x371ee1) {
            const _0x5d2e67 = _0x586fed;
            !this[_0x5d2e67(0x249)] && (_0x371ee1 && _0x371ee1());
            if (this['initialized_'])
                return;
            _0x18937c[_0x5d2e67(0x24b)]()['showSplash'](), _0x18937c[_0x5d2e67(0x24b)]()[_0x5d2e67(0x278)](), this[_0x5d2e67(0x294)](), this[_0x5d2e67(0x29b)](), window[_0x5d2e67(0x229)]['init']()[_0x5d2e67(0x29c)](() => {
                const _0x3c889b = _0x5d2e67;
                Laya['SoundManager'][_0x3c889b(0x205)] = function (_0x4f683d) {
                    const _0x4fcb07 = _0x3c889b;
                    window[_0x4fcb07(0x229)] && window[_0x4fcb07(0x229)][_0x4fcb07(0x205)](_0x4f683d);
                }, Laya[_0x3c889b(0x27f)][_0x3c889b(0x212)] = function (_0x3b019d) {
                    const _0xbfff6c = _0x3c889b;
                    window[_0xbfff6c(0x229)] && window[_0xbfff6c(0x229)][_0xbfff6c(0x212)](_0x3b019d);
                }, Laya[_0x3c889b(0x27f)]['stopMusic'] = function (_0x5f4a7f) {
                    const _0x5a7704 = _0x3c889b;
                    window[_0x5a7704(0x229)] && window[_0x5a7704(0x229)][_0x5a7704(0x20f)]();
                };
            }), this[_0x5d2e67(0x280)] = !![], Laya['loader'][_0x5d2e67(0x22c)](_0x5d2e67(0x281), Laya['Handler'][_0x5d2e67(0x297)](this, _0x22aa68 => {
                YYGGames['startup']({
                    'channel': 0x5,
                    'appName': _0xdd8645,
                    'config': _0x22aa68,
                    'complete': () => {
                        const _0x4d59a2 = _0x3c7a, _0x41c21d = YYGGames[_0x4d59a2(0x283)]();
                        window[_0x4d59a2(0x284)] = this[_0x4d59a2(0x284)](), window[_0x4d59a2(0x285)] = this[_0x4d59a2(0x285)]();
                        switch (_0x41c21d) {
                        case AdPlatformType[_0x4d59a2(0x28b)]:
                        case AdPlatformType[_0x4d59a2(0x28c)]:
                            window['yad'] && (window[_0x4d59a2(0x27d)]['scale'](0x0, 0x0), window[_0x4d59a2(0x27d)][_0x4d59a2(0x28d)]());
                            break;
                        default:
                            window[_0x4d59a2(0x27d)] && Laya['stage'][_0x4d59a2(0x286)](window[_0x4d59a2(0x27d)]), window[_0x4d59a2(0x27d)]['on'](Laya[_0x4d59a2(0x28e)][_0x4d59a2(0x28f)], window['yad'], _0x511226 => {
                                const _0x4a350a = _0x4d59a2;
                                _0x511226[_0x4a350a(0x290)](), _0x18937c[_0x4a350a(0x24b)]()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartUp'] = ![], _0x371ee1 && _0x371ee1();
                    }
                });
            }));
        }
        [_0x586fed(0x294)]() {
            const _0x878bb7 = _0x586fed;
            if (!Laya[_0x878bb7(0x29d)] || !Laya[_0x878bb7(0x29e)])
                return;
            let _0x461dc4 = {
                'x': 0x0,
                'type': _0x878bb7(0x29f),
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': 'Box',
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': _0x878bb7(0x2a0),
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': 'Box(NoVideo)',
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': _0x878bb7(0x2a1),
                        'searchKey': _0x878bb7(0x2a2),
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': _0x878bb7(0x2a3),
                            'presetID': 0x2,
                            'preset': _0x878bb7(0x2a0),
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': _0x878bb7(0x2a3),
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': _0x878bb7(0x2a3),
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': _0x878bb7(0x2a4),
                                'searchKey': _0x878bb7(0x2a4),
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': _0x878bb7(0x2a0),
                                    'height': 0x21c,
                                    'fillColor': '#000000'
                                },
                                'nodeParent': 0x4,
                                'label': _0x878bb7(0x2a5),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x878bb7(0x2a6),
                                'searchKey': _0x878bb7(0x2a6),
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x878bb7(0x2a7),
                                    'text': _0x878bb7(0x2a8),
                                    'presetID': 0x4,
                                    'preset': _0x878bb7(0x2a0),
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': _0x878bb7(0x2a9),
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': _0x878bb7(0x2aa),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x878bb7(0x2a7),
                                    'text': _0x878bb7(0x2ab),
                                    'presetID': 0x5,
                                    'preset': _0x878bb7(0x2a0),
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': _0x878bb7(0x2a9),
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVideo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x878bb7(0x2a6),
                                'searchKey': _0x878bb7(0x2a6),
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': _0x878bb7(0x2ac),
                                    'presetID': 0x6,
                                    'preset': _0x878bb7(0x2a0),
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': _0x878bb7(0x2a9),
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVideo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x9,
                                'child': []
                            }
                        ]
                    }],
                'animations': [{
                        'nodes': [],
                        'name': _0x878bb7(0x2ad),
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }]
            };
            class _0x32a207 extends Laya[_0x878bb7(0x29e)] {
                constructor() {
                    super();
                }
                [_0x878bb7(0x2ae)]() {
                    const _0x5a6e32 = _0x878bb7;
                    this[_0x5a6e32(0x2af)]['top'] = 0x0, this[_0x5a6e32(0x2af)][_0x5a6e32(0x287)] = 0x0, this[_0x5a6e32(0x2af)][_0x5a6e32(0x2b0)] = 0x0, this['owner']['right'] = 0x0, this[_0x5a6e32(0x2a3)] = this['owner'][_0x5a6e32(0x2b1)]('spr_tip'), this[_0x5a6e32(0x2af)][_0x5a6e32(0x26d)] > this[_0x5a6e32(0x2af)][_0x5a6e32(0x2b2)] ? this[_0x5a6e32(0x2a3)][_0x5a6e32(0x1ff)](this[_0x5a6e32(0x2af)][_0x5a6e32(0x2b2)] / 0x780, this[_0x5a6e32(0x2af)][_0x5a6e32(0x2b2)] / 0x780) : this[_0x5a6e32(0x2a3)][_0x5a6e32(0x1ff)](this['owner'][_0x5a6e32(0x26d)] / 0x438, this[_0x5a6e32(0x2af)][_0x5a6e32(0x26d)] / 0x438), this[_0x5a6e32(0x2a3)][_0x5a6e32(0x2b3)](this[_0x5a6e32(0x2af)][_0x5a6e32(0x26d)] / 0x2, this[_0x5a6e32(0x2af)][_0x5a6e32(0x2b2)] / 0x2), this[_0x5a6e32(0x2af)]['on'](Laya[_0x5a6e32(0x28e)][_0x5a6e32(0x2b4)], this, this[_0x5a6e32(0x2b5)]);
                }
                [_0x878bb7(0x2b5)]() {
                    const _0x21c94b = _0x878bb7;
                    _0x18937c[_0x21c94b(0x24b)]()[_0x21c94b(0x2b6)]();
                }
            }
            let _0x19613d = new Laya['Prefab']();
            _0x19613d['json'] = _0x461dc4, this[_0x878bb7(0x2b7)] = _0x19613d[_0x878bb7(0x297)](), this['noVideoPer'][_0x878bb7(0x27c)] = 0x30d3f, this['noVideoPer'][_0x878bb7(0x2b8)](_0x32a207);
        }
        [_0x586fed(0x2b9)]() {
            const _0x23deaf = _0x586fed;
            this[_0x23deaf(0x2b7)] && Laya[_0x23deaf(0x25b)][_0x23deaf(0x286)](this[_0x23deaf(0x2b7)]);
        }
        ['closeNoVideo']() {
            const _0xa7c9a3 = _0x586fed;
            this[_0xa7c9a3(0x2b7)] && this['noVideoPer'][_0xa7c9a3(0x28d)]();
        }
        [_0x586fed(0x29b)]() {
            const _0x2327e2 = _0x586fed;
            if (!Laya[_0x2327e2(0x29d)] || !Laya['Script'])
                return;
            let _0xcaa7bb = {
                'x': 0xf,
                'type': _0x2327e2(0x29f),
                'searchKey': _0x2327e2(0x2ba),
                'props': {
                    'var': _0x2327e2(0x2bb),
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': _0x2327e2(0x2bb),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': _0x2327e2(0x29f),
                        'searchKey': _0x2327e2(0x29f),
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': '#000000',
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': _0x2327e2(0x29f),
                        'isOpen': !![],
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x84,
                        'child': []
                    },
                    {
                        'x': 0x1e,
                        'type': _0x2327e2(0x2a6),
                        'searchKey': _0x2327e2(0x2a6),
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'valign': _0x2327e2(0x2a7),
                            'text': 'LOADING\x5cnPLEASE\x20WAIT…',
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': '#ffffff',
                            'centerY': 0x0,
                            'align': 'center'
                        },
                        'nodeParent': 0x83,
                        'label': _0x2327e2(0x2a6),
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x85,
                        'child': []
                    }
                ]
            };
            class _0x27d6a4 extends Laya[_0x2327e2(0x29e)] {
                constructor() {
                    super();
                }
                [_0x2327e2(0x2ae)]() {
                }
                ['closePer']() {
                    const _0x333192 = _0x2327e2;
                    _0x18937c[_0x333192(0x24b)]()['closeNoVideo']();
                }
            }
            let _0x4d446a = new Laya['Prefab']();
            _0x4d446a[_0x2327e2(0x2bc)] = _0xcaa7bb, this[_0x2327e2(0x2bd)] = _0x4d446a[_0x2327e2(0x297)](), this['loadingPer']['zOrder'] = 0x30d3e, this[_0x2327e2(0x2bd)][_0x2327e2(0x2b8)](_0x27d6a4);
        }
        [_0x586fed(0x2be)]() {
            const _0x2c20bd = _0x586fed;
            this[_0x2c20bd(0x2bd)] && Laya['stage'][_0x2c20bd(0x286)](this[_0x2c20bd(0x2bd)]);
        }
        ['closeLoading']() {
            const _0x575351 = _0x586fed;
            this[_0x575351(0x2bd)] && this[_0x575351(0x2bd)][_0x575351(0x28d)]();
        }
        [_0x586fed(0x2bf)]() {
            const _0x38e12b = _0x586fed;
            class _0x50c7e9 extends Laya[_0x38e12b(0x29f)] {
                constructor() {
                    const _0x4fbe39 = _0x38e12b;
                    super(), this[_0x4fbe39(0x2c0)] = new Laya[(_0x4fbe39(0x279))](), this[_0x4fbe39(0x2c0)][_0x4fbe39(0x2c1)] = _0x4fbe39(0x2c2), this[_0x4fbe39(0x2c3)](0x190, 0x12c), this[_0x4fbe39(0x2c0)]['size'](0x190, 0x12c), this[_0x4fbe39(0x286)](this[_0x4fbe39(0x2c0)]);
                }
            }
            let _0x4f2cc3 = new Laya[(_0x38e12b(0x2c4))]();
            return _0x4f2cc3['size'](0x320, 0x258), _0x4f2cc3[_0x38e12b(0x2c5)] = _0x50c7e9, _0x4f2cc3;
        }
        [_0x586fed(0x284)]() {
            const _0x2f5c12 = _0x586fed;
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames[_0x2f5c12(0x283)]() == AdPlatformType[_0x2f5c12(0x28b)] || YYGGames[_0x2f5c12(0x283)]() == AdPlatformType['en_XIAOMI']) {
                let _0x4809b2 = new Laya[(_0x2f5c12(0x29f))]();
                return _0x4809b2[_0x2f5c12(0x288)] = function () {
                }, _0x4809b2;
            }
            if (!this[_0x2f5c12(0x2c6)]) {
                let _0x3f7536 = {
                    'x': 0x0,
                    'type': _0x2f5c12(0x2c4),
                    'selectedBox': 0x90,
                    'selecteID': 0x78,
                    'searchKey': 'List,scrollAdList',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x370,
                        'repeatY': 0x1,
                        'presetID': 0x1,
                        'preset': _0x2f5c12(0x2c7),
                        'name': 'scrollAdList',
                        'isPresetRoot': !![],
                        'height': 0xaa,
                        'hScrollBarSkin': '\x20',
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x91,
                    'label': _0x2f5c12(0x2c8),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x90,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': _0x2f5c12(0x2c9),
                            'props': {
                                'zOrder': -0xa,
                                'width': 0x384,
                                'skin': _0x2f5c12(0x2ca),
                                'sizeGrid': _0x2f5c12(0x2cb),
                                'presetID': 0x2,
                                'preset': 'laya/pages/prefab/scrollList.prefab',
                                'name': 'img_ListBg',
                                'height': 0xbe,
                                'centerY': 0x0,
                                'centerX': 0x0
                            },
                            'nodeParent': 0x90,
                            'label': 'img_ListBg',
                            'isDirectory': ![],
                            'isAniNode': ![],
                            'hasChild': ![],
                            'compId': 0x78,
                            'child': []
                        },
                        {
                            'x': 0xf,
                            'type': 'Box',
                            'searchKey': _0x2f5c12(0x29f),
                            'props': {
                                'x': 0x0,
                                'width': 0xdc,
                                'renderType': 'render',
                                'presetID': 0x3,
                                'preset': _0x2f5c12(0x2c7),
                                'height': 0xaa
                            },
                            'nodeParent': 0x90,
                            'label': _0x2f5c12(0x2cc),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': ![],
                            'hasChild': !![],
                            'compId': 0x77,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x2f5c12(0x279),
                                    'searchKey': 'Image,thumb',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x4,
                                        'preset': _0x2f5c12(0x2c7),
                                        'name': 'thumb',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'nodeParent': 0x77,
                                    'label': 'thumb',
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': ![],
                                    'hasChild': !![],
                                    'compId': 0x79,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': 'Image',
                                            'searchKey': _0x2f5c12(0x279),
                                            'props': {
                                                'y': 0x4b,
                                                'x': 0x64,
                                                'width': 0xc8,
                                                'skin': _0x2f5c12(0x2cd),
                                                'sizeGrid': _0x2f5c12(0x2ce),
                                                'renderType': 'mask',
                                                'presetID': 0x5,
                                                'preset': _0x2f5c12(0x2c7),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x79,
                                            'label': _0x2f5c12(0x2cf),
                                            'isDirectory': ![],
                                            'isAniNode': ![],
                                            'hasChild': ![],
                                            'compId': 0x7a,
                                            'child': []
                                        }]
                                }]
                        }
                    ],
                    'animations': [{
                            'nodes': [],
                            'name': _0x2f5c12(0x2ad),
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x45c94f extends Laya[_0x2f5c12(0x29e)] {
                    constructor() {
                        const _0x3772fe = _0x2f5c12;
                        super(), this[_0x3772fe(0x2d0)] = [], this['scaleNum'] = [
                            0.83,
                            0.83
                        ], this[_0x3772fe(0x2d1)] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        const _0x5cc176 = _0x2f5c12;
                        this['img_ListBg'] = this[_0x5cc176(0x2af)][_0x5cc176(0x2b1)](_0x5cc176(0x2d2)), this[_0x5cc176(0x2af)]['visible'] = ![], !this[_0x5cc176(0x2af)][_0x5cc176(0x2d3)] && (this[_0x5cc176(0x2af)]['renderHandler'] = new Laya[(_0x5cc176(0x296))](this, this[_0x5cc176(0x2d4)]));
                        if (this[_0x5cc176(0x2d0)][_0x5cc176(0x22d)]) {
                            let _0x4b1c7d = JSON[_0x5cc176(0x20e)](JSON[_0x5cc176(0x257)](this[_0x5cc176(0x2d0)]));
                            Laya['loader'][_0x5cc176(0x2d5)](_0x4b1c7d);
                        }
                        this['setSize'](this[_0x5cc176(0x2d1)][0x0], this[_0x5cc176(0x2d1)][0x1], this[_0x5cc176(0x2d1)][0x2]), this[_0x5cc176(0x2af)][_0x5cc176(0x2d6)][_0x5cc176(0x2d7)] = ![], this[_0x5cc176(0x2af)][_0x5cc176(0x2d6)]['mouseEnabled'] = ![], this['owner'][_0x5cc176(0x2d6)][_0x5cc176(0x2d8)] = ![];
                        let _0x3cd70c = _0x18937c['getInstance']()[_0x5cc176(0x2d9)]();
                        if (!_0x3cd70c[_0x5cc176(0x22d)])
                            return;
                        this['listArray'] = JSON[_0x5cc176(0x20e)](JSON[_0x5cc176(0x257)](_0x3cd70c)), this[_0x5cc176(0x2da)] = this[_0x5cc176(0x2da)][_0x5cc176(0x2db)](this[_0x5cc176(0x2da)]['slice'](0x0, 0x4)), this[_0x5cc176(0x2af)][_0x5cc176(0x2dc)] = 0x0, this[_0x5cc176(0x2af)]['array'] = this[_0x5cc176(0x2da)], Laya[_0x5cc176(0x1f9)][_0x5cc176(0x2dd)](0x1, this, this[_0x5cc176(0x2de)]), this[_0x5cc176(0x2af)][_0x5cc176(0x28a)] = !![];
                    }
                    [_0x2f5c12(0x2d4)](_0x2a497b, _0x5603e1) {
                        const _0x23d77e = _0x2f5c12;
                        let _0x4323f2 = _0x2a497b[_0x23d77e(0x2b1)](_0x23d77e(0x2c2));
                        _0x2a497b[_0x23d77e(0x2df)](), _0x4323f2['offAll'](), _0x2a497b['on'](Laya[_0x23d77e(0x28e)][_0x23d77e(0x2e0)], _0x2a497b, () => {
                            const _0x26676a = _0x23d77e;
                            _0x2a497b[_0x26676a(0x27c)] = 0x64;
                        }), _0x2a497b['on'](Laya[_0x23d77e(0x28e)][_0x23d77e(0x2e1)], _0x2a497b, () => {
                            const _0x42bc5e = _0x23d77e;
                            _0x2a497b[_0x42bc5e(0x27c)] = _0x5603e1;
                        }), _0x4323f2['on'](Laya[_0x23d77e(0x28e)][_0x23d77e(0x2e0)], _0x2a497b, () => {
                            const _0x1fc198 = _0x23d77e;
                            _0x4323f2[_0x1fc198(0x1ff)](1.1, 1.1), this[_0x1fc198(0x2e2)]();
                        }), _0x4323f2['on'](Laya[_0x23d77e(0x28e)][_0x23d77e(0x2e1)], _0x2a497b, () => {
                            const _0x10e30e = _0x23d77e;
                            _0x4323f2[_0x10e30e(0x1ff)](0x1, 0x1), Laya['timer'][_0x10e30e(0x2dd)](0x1, this, this[_0x10e30e(0x2de)]);
                        }), _0x4323f2['on'](Laya[_0x23d77e(0x28e)][_0x23d77e(0x28f)], _0x2a497b, _0x48729e => {
                            const _0x261e76 = _0x23d77e;
                            _0x48729e['stopPropagation'](), _0x18937c['getInstance']()['navigate'](_0x261e76(0x298), _0x261e76(0x2e3), _0x2a497b[_0x261e76(0x2e4)]['id']);
                        });
                        let _0xd9ca8e = _0x4323f2[_0x23d77e(0x2e5)];
                        _0x2a497b[_0x23d77e(0x26d)] = this[_0x23d77e(0x2d1)][0x0] + 0x14, _0x2a497b[_0x23d77e(0x2b2)] = this['sizeTran'][0x1] + 0x14, _0x2a497b['x'] = (this[_0x23d77e(0x2d1)][0x0] + 0x14) * _0x5603e1;
                        if (this[_0x23d77e(0x2d1)][0x2])
                            _0xd9ca8e[_0x23d77e(0x26d)] = _0x4323f2['width'] = this[_0x23d77e(0x2d1)][0x0], _0xd9ca8e['height'] = _0x4323f2['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x92553 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this[_0x23d77e(0x2d1)][0x1] ? 0xc8 / this[_0x23d77e(0x2d1)][0x0] : 0x96 / this[_0x23d77e(0x2d1)][0x1];
                            _0x4323f2[_0x23d77e(0x26d)] = 0xc8 / _0x92553, _0x4323f2[_0x23d77e(0x2b2)] = 0x96 / _0x92553, _0xd9ca8e[_0x23d77e(0x26d)] = this[_0x23d77e(0x2d1)][0x0], _0xd9ca8e[_0x23d77e(0x2b2)] = this[_0x23d77e(0x2d1)][0x1];
                        }
                        _0xd9ca8e['x'] = _0x4323f2[_0x23d77e(0x26d)] / 0x2, _0xd9ca8e['y'] = _0x4323f2[_0x23d77e(0x2b2)] / 0x2;
                    }
                    [_0x2f5c12(0x288)](_0x751404, _0x3bfa64, _0xc95bb3 = ![]) {
                        const _0x158116 = _0x2f5c12;
                        this[_0x158116(0x2d1)] = [
                            _0x751404,
                            _0x3bfa64,
                            _0xc95bb3
                        ], this[_0x158116(0x2d2)] && (this[_0x158116(0x2af)][_0x158116(0x26d)] = (_0x751404 + 0x14) * 0x4, this['owner'][_0x158116(0x2b2)] = _0x3bfa64 + 0x14, this[_0x158116(0x2d2)]['width'] = (_0x751404 + 0x14) * 0x4 + 0x14, this[_0x158116(0x2d2)]['height'] = _0x3bfa64 + 0x28, this[_0x158116(0x2af)]['array'] = [], this[_0x158116(0x2af)][_0x158116(0x2e6)] = this[_0x158116(0x2da)]);
                    }
                    [_0x2f5c12(0x2de)]() {
                        const _0x359fc6 = _0x2f5c12;
                        this[_0x359fc6(0x2af)][_0x359fc6(0x2d6)]['value'] += 0x1, this['owner'][_0x359fc6(0x2d6)]['value'] >= this[_0x359fc6(0x2af)][_0x359fc6(0x2d6)][_0x359fc6(0x2e7)] && (this['owner']['scrollBar'][_0x359fc6(0x227)] = 0x0);
                    }
                    [_0x2f5c12(0x2e2)]() {
                        const _0x2b81e4 = _0x2f5c12;
                        Laya[_0x2b81e4(0x1f9)][_0x2b81e4(0x2e8)](this), Laya[_0x2b81e4(0x2e9)]['clearAll'](this[_0x2b81e4(0x2af)][_0x2b81e4(0x2d6)]);
                    }
                    [_0x2f5c12(0x2ea)](_0x19bea1) {
                    }
                    [_0x2f5c12(0x2eb)]() {
                        const _0x99b3aa = _0x2f5c12;
                        if (this[_0x99b3aa(0x2d0)]['length']) {
                            let _0x3d7879 = JSON[_0x99b3aa(0x20e)](JSON[_0x99b3aa(0x257)](this[_0x99b3aa(0x2d0)]));
                            Laya[_0x99b3aa(0x295)][_0x99b3aa(0x2d5)](_0x3d7879);
                        }
                        this[_0x99b3aa(0x2d0)] = [], this[_0x99b3aa(0x2e2)](), this[_0x99b3aa(0x2af)][_0x99b3aa(0x2e6)] = [];
                    }
                }
                let _0x5a3d6f = new Laya[(_0x2f5c12(0x29d))]();
                _0x5a3d6f[_0x2f5c12(0x2bc)] = _0x3f7536, this['_scrollList'] = _0x5a3d6f[_0x2f5c12(0x297)](), this['_scrollList']['zOrder'] = 0x30d3f, this[_0x2f5c12(0x2c6)][_0x2f5c12(0x2b8)](_0x45c94f), this[_0x2f5c12(0x2c6)][_0x2f5c12(0x288)] = this[_0x2f5c12(0x2c6)][_0x2f5c12(0x2ec)](_0x45c94f)[_0x2f5c12(0x288)]['bind'](this[_0x2f5c12(0x2c6)][_0x2f5c12(0x2ec)](_0x45c94f));
            }
            return this['_scrollList'];
        }
        ['box_adTwo']() {
            const _0xbafd87 = _0x586fed;
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatformType']() == AdPlatformType[_0xbafd87(0x28b)] || YYGGames[_0xbafd87(0x283)]() == AdPlatformType[_0xbafd87(0x28c)]) {
                let _0x45f9bf = new Laya[(_0xbafd87(0x29f))]();
                return _0x45f9bf[_0xbafd87(0x289)] = _0x45f9bf[_0xbafd87(0x288)] = function () {
                }, _0x45f9bf;
            }
            if (!this['_box_adTwo']) {
                let _0x2af9c5 = {
                    'x': 0x0,
                    'type': 'Box',
                    'selectedBox': 0x96,
                    'selecteID': 0x98,
                    'searchKey': _0xbafd87(0x2ed),
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x1,
                        'presetID': 0x1,
                        'preset': 'laya/pages/prefab/box_adTwo.prefab',
                        'name': _0xbafd87(0x285),
                        'isPresetRoot': !![],
                        'height': 0x1,
                        'centerX': 0x0,
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x99,
                    'label': 'box_adTwo',
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x92,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': 'Image,img_ad0',
                            'props': {
                                'y': 0x0,
                                'x': -0x136,
                                'width': 0xdc,
                                'skin': _0xbafd87(0x2cd),
                                'sizeGrid': _0xbafd87(0x2ce),
                                'presetID': 0x2,
                                'preset': _0xbafd87(0x2ee),
                                'name': 'img_ad0',
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0xbafd87(0x2ef),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x93,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0xbafd87(0x279),
                                    'searchKey': _0xbafd87(0x2f0),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x3,
                                        'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                        'name': _0xbafd87(0x2f1),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x93,
                                    'label': _0xbafd87(0x2f1),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x95,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0xbafd87(0x279),
                                            'searchKey': _0xbafd87(0x279),
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0xbafd87(0x2cd),
                                                'sizeGrid': '30,30,30,30',
                                                'renderType': 'mask',
                                                'presetID': 0x4,
                                                'preset': _0xbafd87(0x2ee),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x95,
                                            'label': 'Image(box_adTwo)',
                                            'isDirectory': ![],
                                            'isAniNode': !![],
                                            'hasChild': ![],
                                            'compId': 0x97,
                                            'child': []
                                        }]
                                }]
                        },
                        {
                            'x': 0xf,
                            'type': _0xbafd87(0x279),
                            'searchKey': 'Image,img_ad1',
                            'props': {
                                'y': 0x0,
                                'x': 0x5a,
                                'width': 0xdc,
                                'skin': _0xbafd87(0x2cd),
                                'sizeGrid': _0xbafd87(0x2ce),
                                'presetID': 0x5,
                                'preset': _0xbafd87(0x2ee),
                                'name': _0xbafd87(0x2f2),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': 'img_ad1',
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x94,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0xbafd87(0x279),
                                    'searchKey': 'Image,img_adImg',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x6,
                                        'preset': _0xbafd87(0x2ee),
                                        'name': _0xbafd87(0x2f1),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x94,
                                    'label': _0xbafd87(0x2f1),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x96,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0xbafd87(0x279),
                                            'searchKey': 'Image',
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0xbafd87(0x2cd),
                                                'sizeGrid': _0xbafd87(0x2ce),
                                                'renderType': _0xbafd87(0x2e5),
                                                'presetID': 0x7,
                                                'preset': _0xbafd87(0x2ee),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x96,
                                            'label': _0xbafd87(0x2f3),
                                            'isDirectory': ![],
                                            'isAniNode': !![],
                                            'hasChild': ![],
                                            'compId': 0x98,
                                            'child': []
                                        }]
                                }]
                        }
                    ],
                    'animations': [{
                            'nodes': [],
                            'name': _0xbafd87(0x2ad),
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x23dfe0 extends Laya[_0xbafd87(0x29e)] {
                    constructor() {
                        const _0x5a9ae6 = _0xbafd87;
                        super(), this[_0x5a9ae6(0x2d0)] = [], this['spaceNum'] = 0x0, this[_0x5a9ae6(0x2d1)] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    [_0xbafd87(0x2ae)]() {
                        const _0x3b0b6a = _0xbafd87;
                        !this[_0x3b0b6a(0x2ef)] && (this[_0x3b0b6a(0x2ef)] = this['owner'][_0x3b0b6a(0x2b1)](_0x3b0b6a(0x2ef))), !this[_0x3b0b6a(0x2f2)] && (this[_0x3b0b6a(0x2f2)] = this[_0x3b0b6a(0x2af)]['getChildByName'](_0x3b0b6a(0x2f2))), !this[_0x3b0b6a(0x2f4)] && (this[_0x3b0b6a(0x2f4)] = this[_0x3b0b6a(0x2ef)][_0x3b0b6a(0x2b1)](_0x3b0b6a(0x2f1))), !this[_0x3b0b6a(0x2f5)] && (this[_0x3b0b6a(0x2f5)] = this[_0x3b0b6a(0x2f2)][_0x3b0b6a(0x2b1)](_0x3b0b6a(0x2f1))), !this[_0x3b0b6a(0x2f6)] && (this[_0x3b0b6a(0x2f6)] = this[_0x3b0b6a(0x2f4)]['mask']), !this[_0x3b0b6a(0x2f7)] && (this['img_ad1AdMask'] = this[_0x3b0b6a(0x2f5)][_0x3b0b6a(0x2e5)]), this[_0x3b0b6a(0x2af)][_0x3b0b6a(0x28a)] = ![];
                        let _0x24d252 = _0x18937c[_0x3b0b6a(0x24b)]()[_0x3b0b6a(0x2d9)]();
                        if (!_0x24d252['length'])
                            return;
                        let _0x2adc85 = JSON[_0x3b0b6a(0x20e)](JSON[_0x3b0b6a(0x257)](_0x24d252));
                        if (this[_0x3b0b6a(0x2d0)][_0x3b0b6a(0x22d)]) {
                            let _0x204065 = JSON[_0x3b0b6a(0x20e)](JSON[_0x3b0b6a(0x257)](this[_0x3b0b6a(0x2d0)]));
                            Laya['loader'][_0x3b0b6a(0x2d5)](_0x204065);
                        }
                        this['setSpaceX'](this[_0x3b0b6a(0x2f8)]), this[_0x3b0b6a(0x288)](this[_0x3b0b6a(0x2d1)][0x0], this[_0x3b0b6a(0x2d1)][0x1], this[_0x3b0b6a(0x2d1)][0x2]), this[_0x3b0b6a(0x2ef)][_0x3b0b6a(0x2df)](), this[_0x3b0b6a(0x2f2)][_0x3b0b6a(0x2df)](), this[_0x3b0b6a(0x2af)][_0x3b0b6a(0x28a)] = !![], this[_0x3b0b6a(0x2ef)]['getChildByName'](_0x3b0b6a(0x2f1))['skin'] = _0x2adc85[0x0]['thumb'], this['img_ad1']['getChildByName']('img_adImg')[_0x3b0b6a(0x27a)] = _0x2adc85[0x1][_0x3b0b6a(0x2c2)], this['img_ad0']['on'](Laya[_0x3b0b6a(0x28e)]['MOUSE_DOWN'], this, _0x1618fc => {
                            const _0x2cc767 = _0x3b0b6a;
                            _0x1618fc[_0x2cc767(0x290)](), _0x18937c[_0x2cc767(0x24b)]()['navigate'](_0x2cc767(0x298), _0x2cc767(0x2e3), _0x2adc85[0x0]['id']);
                        }), this[_0x3b0b6a(0x2f2)]['on'](Laya[_0x3b0b6a(0x28e)]['MOUSE_DOWN'], this, _0x4a8594 => {
                            const _0xcfa5 = _0x3b0b6a;
                            _0x4a8594[_0xcfa5(0x290)](), _0x18937c['getInstance']()[_0xcfa5(0x251)](_0xcfa5(0x298), 'MORE', _0x2adc85[0x1]['id']);
                        });
                    }
                    [_0xbafd87(0x289)](_0x13a0a0) {
                        const _0x505b30 = _0xbafd87;
                        this[_0x505b30(0x2f8)] = _0x13a0a0, this[_0x505b30(0x2ef)] && (this[_0x505b30(0x2ef)]['x'] = -this['img_ad0'][_0x505b30(0x26d)] - this[_0x505b30(0x2f8)] / 0x2, this[_0x505b30(0x2f2)]['x'] = this[_0x505b30(0x2f8)] / 0x2);
                    }
                    [_0xbafd87(0x2eb)]() {
                        const _0x2258ef = _0xbafd87;
                        if (this[_0x2258ef(0x2d0)][_0x2258ef(0x22d)]) {
                            let _0x4004ea = JSON[_0x2258ef(0x20e)](JSON['stringify'](this[_0x2258ef(0x2d0)]));
                            Laya[_0x2258ef(0x295)][_0x2258ef(0x2d5)](_0x4004ea);
                        }
                        this[_0x2258ef(0x2d0)] = [];
                    }
                    [_0xbafd87(0x288)](_0x500265, _0x5a3609, _0x2e3226 = ![]) {
                        const _0x51c71e = _0xbafd87;
                        this[_0x51c71e(0x2d1)] = [
                            _0x500265,
                            _0x5a3609,
                            _0x2e3226
                        ];
                        if (this[_0x51c71e(0x2ef)]) {
                            this[_0x51c71e(0x2ef)][_0x51c71e(0x26d)] = this['img_ad1'][_0x51c71e(0x26d)] = _0x500265 + 0x14, this['img_ad0'][_0x51c71e(0x2b2)] = this[_0x51c71e(0x2f2)]['height'] = _0x5a3609 + 0x14;
                            if (_0x2e3226)
                                this[_0x51c71e(0x2f6)][_0x51c71e(0x26d)] = this[_0x51c71e(0x2f7)][_0x51c71e(0x26d)] = this[_0x51c71e(0x2f4)][_0x51c71e(0x26d)] = this[_0x51c71e(0x2f5)][_0x51c71e(0x26d)] = _0x500265, this[_0x51c71e(0x2f6)][_0x51c71e(0x2b2)] = this[_0x51c71e(0x2f7)][_0x51c71e(0x2b2)] = this[_0x51c71e(0x2f4)]['height'] = this['img_ad1Ad'][_0x51c71e(0x2b2)] = _0x5a3609;
                            else {
                                let _0x39d537 = 0xc8 / _0x500265 < 0x96 / _0x5a3609 ? 0xc8 / _0x500265 : 0x96 / _0x5a3609;
                                this['img_ad0Ad'][_0x51c71e(0x26d)] = this[_0x51c71e(0x2f5)][_0x51c71e(0x26d)] = 0xc8 / _0x39d537, this[_0x51c71e(0x2f4)][_0x51c71e(0x2b2)] = this[_0x51c71e(0x2f5)][_0x51c71e(0x2b2)] = 0x96 / _0x39d537, this[_0x51c71e(0x2f6)][_0x51c71e(0x26d)] = this[_0x51c71e(0x2f7)][_0x51c71e(0x26d)] = _0x500265, this[_0x51c71e(0x2f6)][_0x51c71e(0x2b2)] = this['img_ad1AdMask']['height'] = _0x5a3609;
                            }
                            this[_0x51c71e(0x2f6)]['x'] = this[_0x51c71e(0x2f7)]['x'] = this[_0x51c71e(0x2f4)][_0x51c71e(0x26d)] / 0x2, this[_0x51c71e(0x2f6)]['y'] = this['img_ad1AdMask']['y'] = this['img_ad0Ad']['height'] / 0x2, this[_0x51c71e(0x289)](this[_0x51c71e(0x2f8)]);
                        }
                    }
                }
                let _0x8d4c8e = new Laya[(_0xbafd87(0x29d))]();
                _0x8d4c8e[_0xbafd87(0x2bc)] = _0x2af9c5, this[_0xbafd87(0x2f9)] = _0x8d4c8e[_0xbafd87(0x297)](), this[_0xbafd87(0x2f9)]['zOrder'] = 0x30d3f, this[_0xbafd87(0x2f9)][_0xbafd87(0x2b8)](_0x23dfe0), this[_0xbafd87(0x2f9)][_0xbafd87(0x289)] = this[_0xbafd87(0x2f9)][_0xbafd87(0x2ec)](_0x23dfe0)[_0xbafd87(0x289)][_0xbafd87(0x1ef)](this[_0xbafd87(0x2f9)][_0xbafd87(0x2ec)](_0x23dfe0)), this[_0xbafd87(0x2f9)]['setSize'] = this['_box_adTwo']['getComponent'](_0x23dfe0)['setSize'][_0xbafd87(0x1ef)](this[_0xbafd87(0x2f9)][_0xbafd87(0x2ec)](_0x23dfe0));
            }
            return this[_0xbafd87(0x2f9)];
        }
    }
    _0x18937c['_instance'] = null, window[_0x586fed(0x2fa)] = _0x18937c;
    class _0x1b04ee {
        constructor() {
            const _0x3554d7 = _0x586fed;
            this[_0x3554d7(0x2fb)] = null, this[_0x3554d7(0x2c6)] = null, this['_inst'] = this;
        }
        static get [_0x586fed(0x2fc)]() {
            const _0x3bddf8 = _0x586fed;
            return !this['_inst'] && new _0x1b04ee(), this[_0x3bddf8(0x2fd)];
        }
        ['box_adTwo']() {
            const _0x35d920 = _0x586fed;
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatformType']() == AdPlatformType['en_GAMEDISTRIBUTION'] || YYGGames[_0x35d920(0x283)]() == AdPlatformType[_0x35d920(0x28c)]) {
                let _0x1b88da = new Laya['Box']();
                return _0x1b88da[_0x35d920(0x289)] = _0x1b88da[_0x35d920(0x288)] = function () {
                }, _0x1b88da;
            }
            if (!this[_0x35d920(0x2fb)]) {
                this[_0x35d920(0x2fb)] = new Laya[(_0x35d920(0x29f))](), this['_box_adTwo0'][_0x35d920(0x2c1)] = _0x35d920(0x2fb), this['_box_adTwo0'][_0x35d920(0x2fe)] = this[_0x35d920(0x2fb)][_0x35d920(0x2ff)] = 0.5, this[_0x35d920(0x2fb)][_0x35d920(0x27c)] = 0x30d3f, this[_0x35d920(0x2fb)]['spaceXNum'] = 0x0;
                let _0x3c2205 = new Laya[(_0x35d920(0x279))]();
                _0x3c2205[_0x35d920(0x2c1)] = _0x35d920(0x300), _0x3c2205[_0x35d920(0x301)] = _0x35d920(0x2ce), _0x3c2205[_0x35d920(0x2c3)](0xdc, 0xaa), _0x3c2205['skin'] = _0x35d920(0x2cd);
                let _0x518eb7 = new Laya[(_0x35d920(0x279))]();
                _0x518eb7[_0x35d920(0x2c1)] = _0x35d920(0x302), _0x518eb7[_0x35d920(0x2c3)](0xc8, 0x96), _0x518eb7['sizeGrid'] = _0x35d920(0x2ce), _0x518eb7['anchorX'] = _0x518eb7[_0x35d920(0x2ff)] = 0.5, _0x518eb7[_0x35d920(0x27a)] = _0x35d920(0x2cd);
                let _0x495bb5 = new Laya['Image']();
                _0x495bb5[_0x35d920(0x2c1)] = _0x35d920(0x303), _0x495bb5['size'](0xc8, 0x96), _0x495bb5[_0x35d920(0x2fe)] = _0x495bb5['anchorY'] = 0.5, _0x495bb5['skin'] = '', _0x495bb5[_0x35d920(0x2e5)] = _0x518eb7, _0x3c2205[_0x35d920(0x286)](_0x495bb5), _0x3c2205[_0x35d920(0x2b3)](0x0, 0x0), _0x495bb5[_0x35d920(0x2b3)](_0x3c2205[_0x35d920(0x26d)] / 0x2, _0x3c2205['height'] / 0x2), _0x518eb7[_0x35d920(0x2b3)](_0x495bb5[_0x35d920(0x26d)] / 0x2, _0x495bb5[_0x35d920(0x2b2)] / 0x2);
                let _0xaa3b67 = new Laya[(_0x35d920(0x279))]();
                _0xaa3b67[_0x35d920(0x2c1)] = _0x35d920(0x304), _0xaa3b67[_0x35d920(0x301)] = '30,30,30,30', _0xaa3b67[_0x35d920(0x2c3)](0xdc, 0xaa), _0xaa3b67[_0x35d920(0x27a)] = 'di1.png';
                let _0x4acae5 = new Laya[(_0x35d920(0x279))]();
                _0x4acae5[_0x35d920(0x2c1)] = _0x35d920(0x305), _0x4acae5[_0x35d920(0x2c3)](0xc8, 0x96), _0x4acae5[_0x35d920(0x301)] = '30,30,30,30', _0x4acae5[_0x35d920(0x2fe)] = _0x4acae5[_0x35d920(0x2ff)] = 0.5, _0x4acae5[_0x35d920(0x27a)] = _0x35d920(0x2cd);
                let _0x5bf32d = new Laya[(_0x35d920(0x279))]();
                _0x5bf32d['name'] = 'rightAd', _0x5bf32d['size'](0xc8, 0x96), _0x5bf32d['anchorX'] = _0x5bf32d[_0x35d920(0x2ff)] = 0.5, _0x5bf32d[_0x35d920(0x27a)] = '', _0x5bf32d['mask'] = _0x4acae5, _0xaa3b67[_0x35d920(0x286)](_0x5bf32d), _0xaa3b67['pos'](_0x3c2205['width'], 0x0), _0x5bf32d[_0x35d920(0x2b3)](_0xaa3b67[_0x35d920(0x26d)] / 0x2, _0xaa3b67[_0x35d920(0x2b2)] / 0x2), _0x4acae5[_0x35d920(0x2b3)](_0x5bf32d[_0x35d920(0x26d)] / 0x2, _0x5bf32d[_0x35d920(0x2b2)] / 0x2), this[_0x35d920(0x2fb)][_0x35d920(0x2dc)] = 0x0, this[_0x35d920(0x2fb)][_0x35d920(0x26d)] = _0x3c2205[_0x35d920(0x26d)] + _0xaa3b67['width'], this[_0x35d920(0x2fb)]['addChild'](_0x3c2205), this[_0x35d920(0x2fb)][_0x35d920(0x286)](_0xaa3b67), this[_0x35d920(0x2fb)][_0x35d920(0x289)] = this[_0x35d920(0x289)][_0x35d920(0x1ef)](this[_0x35d920(0x2fb)]), this[_0x35d920(0x2fb)][_0x35d920(0x288)] = this[_0x35d920(0x288)][_0x35d920(0x1ef)](this[_0x35d920(0x2fb)]);
                let _0x5ae254 = _0x18937c[_0x35d920(0x24b)]()[_0x35d920(0x2d9)]();
                if (!_0x5ae254[_0x35d920(0x22d)])
                    return;
                let _0x4f55c2 = JSON[_0x35d920(0x20e)](JSON['stringify'](_0x5ae254));
                _0x495bb5[_0x35d920(0x2df)](), _0x5bf32d[_0x35d920(0x2df)](), _0x495bb5[_0x35d920(0x27a)] = _0x4f55c2[0x0][_0x35d920(0x2c2)], _0x5bf32d[_0x35d920(0x27a)] = _0x4f55c2[0x1][_0x35d920(0x2c2)], _0x495bb5['on'](Laya[_0x35d920(0x28e)][_0x35d920(0x28f)], this, _0x61ec4f => {
                    const _0x550e11 = _0x35d920;
                    _0x61ec4f[_0x550e11(0x290)](), _0x18937c[_0x550e11(0x24b)]()['navigate'](_0x550e11(0x298), _0x550e11(0x2e3), _0x4f55c2[0x0]['id']);
                }), _0x5bf32d['on'](Laya[_0x35d920(0x28e)][_0x35d920(0x28f)], this, _0x3799b2 => {
                    const _0x159679 = _0x35d920;
                    _0x3799b2[_0x159679(0x290)](), _0x18937c['getInstance']()[_0x159679(0x251)](_0x159679(0x298), 'MORE', _0x4f55c2[0x1]['id']);
                }), this[_0x35d920(0x2fb)][_0x35d920(0x28a)] = ![];
            }
            return this[_0x35d920(0x2fb)];
        }
        [_0x586fed(0x288)](_0x1633fd = 0xc8, _0x550544 = 0x96, _0x1e7735 = ![], _0x2666da = !![]) {
            const _0x4d8e7e = _0x586fed;
            let _0x4d88b9 = 0xc8;
            _0x1633fd / 0xc8 > _0x550544 / 0x96 ? _0x4d88b9 = _0x1633fd / 0xc8 : _0x4d88b9 = _0x550544 / 0x96;
            let _0x4b1793 = 0xc8;
            if (this[_0x4d8e7e(0x2c1)] == '_box_adTwo0') {
                let _0x5d13ae = this['getChildByName'](_0x4d8e7e(0x300)), _0x1c8deb = this['getChildByName']('rightAdBg'), _0x1d286c = _0x5d13ae[_0x4d8e7e(0x2b1)]('leftAd'), _0x33d8b9 = _0x1c8deb['getChildByName'](_0x4d8e7e(0x306));
                _0x2666da && (_0x5d13ae[_0x4d8e7e(0x2c3)](0xdc, 0xaa), _0x1c8deb[_0x4d8e7e(0x2c3)](0xdc, 0xaa), _0x1d286c[_0x4d8e7e(0x2c3)](0xc8, 0x96), _0x33d8b9[_0x4d8e7e(0x2c3)](0xc8, 0x96), _0x1d286c[_0x4d8e7e(0x2e5)][_0x4d8e7e(0x2c3)](0xc8, 0x96), _0x33d8b9[_0x4d8e7e(0x2e5)]['size'](0xc8, 0x96), _0x5d13ae['scale'](0x1, 0x1), _0x1c8deb[_0x4d8e7e(0x1ff)](0x1, 0x1), _0x1d286c[_0x4d8e7e(0x1ff)](0x1, 0x1), _0x33d8b9[_0x4d8e7e(0x1ff)](0x1, 0x1), _0x1d286c[_0x4d8e7e(0x2e5)][_0x4d8e7e(0x1ff)](0x1, 0x1), _0x33d8b9['mask'][_0x4d8e7e(0x1ff)](0x1, 0x1));
                let _0x936c1d = 0xc8 * _0x550544 / _0x1633fd;
                _0x5d13ae[_0x4d8e7e(0x2c3)](_0x4b1793 + 0x14, _0x936c1d + 0x14), _0x1c8deb['size'](_0x4b1793 + 0x14, _0x936c1d + 0x14), _0x1d286c['mask'][_0x4d8e7e(0x2c3)](_0x4b1793, _0x936c1d), _0x33d8b9[_0x4d8e7e(0x2e5)][_0x4d8e7e(0x2c3)](_0x4b1793, _0x936c1d), !_0x1e7735 ? (_0x1d286c[_0x4d8e7e(0x2c3)](_0x4b1793, _0x936c1d), _0x33d8b9[_0x4d8e7e(0x2c3)](_0x4b1793, _0x936c1d)) : (_0x1d286c[_0x4d8e7e(0x2c3)](0xc8 * _0x4d88b9, 0x96 * _0x4d88b9), _0x33d8b9[_0x4d8e7e(0x2c3)](0xc8 * _0x4d88b9, 0x96 * _0x4d88b9)), _0x1d286c[_0x4d8e7e(0x2b3)](_0x5d13ae[_0x4d8e7e(0x26d)] / 0x2, _0x5d13ae['height'] / 0x2), _0x1d286c[_0x4d8e7e(0x2e5)][_0x4d8e7e(0x2b3)](_0x1d286c[_0x4d8e7e(0x26d)] / 0x2, _0x1d286c['height'] / 0x2), _0x33d8b9[_0x4d8e7e(0x2b3)](_0x1c8deb[_0x4d8e7e(0x26d)] / 0x2, _0x1c8deb[_0x4d8e7e(0x2b2)] / 0x2), _0x33d8b9[_0x4d8e7e(0x2e5)][_0x4d8e7e(0x2b3)](_0x33d8b9[_0x4d8e7e(0x26d)] / 0x2, _0x33d8b9['height'] / 0x2), this[_0x4d8e7e(0x289)](this[_0x4d8e7e(0x307)]);
            } else
                this[_0x4d8e7e(0x2c1)] == _0x4d8e7e(0x2c6) && (this[_0x4d8e7e(0x308)] = [
                    _0x1633fd,
                    _0x550544,
                    _0x1e7735,
                    _0x2666da
                ]);
        }
        [_0x586fed(0x284)]() {
            const _0x21eab0 = _0x586fed;
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames[_0x21eab0(0x283)]() == AdPlatformType[_0x21eab0(0x28b)] || YYGGames[_0x21eab0(0x283)]() == AdPlatformType[_0x21eab0(0x28c)]) {
                let _0x4852df = new Laya['Box']();
                return _0x4852df[_0x21eab0(0x288)] = function () {
                }, _0x4852df;
            }
            if (!this['_scrollList']) {
                this[_0x21eab0(0x2c6)] = new Laya[(_0x21eab0(0x279))](), this[_0x21eab0(0x2c6)][_0x21eab0(0x2c1)] = _0x21eab0(0x2c6), this[_0x21eab0(0x2c6)][_0x21eab0(0x27a)] = _0x21eab0(0x2ca), this[_0x21eab0(0x2c6)][_0x21eab0(0x301)] = '30,30,30,30', this[_0x21eab0(0x2c6)][_0x21eab0(0x2c3)](0x384, 0xbe), this[_0x21eab0(0x2c6)][_0x21eab0(0x27c)] = 0x30d3f, this[_0x21eab0(0x2c6)][_0x21eab0(0x2dc)] = 0x0, this[_0x21eab0(0x2c6)][_0x21eab0(0x308)] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x3d38bf extends Laya['Box'] {
                    constructor() {
                        const _0x29c3d5 = _0x21eab0;
                        super(), this[_0x29c3d5(0x309)] = 0x0, this[_0x29c3d5(0x2c0)] = new Laya['Image'](), this[_0x29c3d5(0x2c0)][_0x29c3d5(0x2c1)] = 'img', this[_0x29c3d5(0x2c0)][_0x29c3d5(0x2fe)] = this[_0x29c3d5(0x2c0)][_0x29c3d5(0x2ff)] = 0.5, this[_0x29c3d5(0x2c3)](0xdc, 0xaa), this['img'][_0x29c3d5(0x2c3)](0xc8, 0x96), this['addChild'](this[_0x29c3d5(0x2c0)]), this[_0x29c3d5(0x30a)] = new Laya[(_0x29c3d5(0x279))](), this['imgMask'][_0x29c3d5(0x301)] = _0x29c3d5(0x2ce), this[_0x29c3d5(0x30a)]['name'] = _0x29c3d5(0x30a), this[_0x29c3d5(0x30a)]['anchorX'] = this[_0x29c3d5(0x30a)][_0x29c3d5(0x2ff)] = 0.5, this[_0x29c3d5(0x30a)][_0x29c3d5(0x27a)] = 'di1.png', this[_0x29c3d5(0x30a)]['size'](0xc8, 0x96), this[_0x29c3d5(0x2c0)][_0x29c3d5(0x2e5)] = this[_0x29c3d5(0x30a)], this[_0x29c3d5(0x2c0)]['pos'](this[_0x29c3d5(0x26d)] / 0x2, this[_0x29c3d5(0x2b2)] / 0x2), this['imgMask']['pos'](this[_0x29c3d5(0x2c0)]['width'] / 0x2, this[_0x29c3d5(0x2c0)][_0x29c3d5(0x2b2)] / 0x2);
                    }
                }
                let _0x5219d6 = new Laya['List']();
                _0x5219d6[_0x21eab0(0x30b)] = '\x20', _0x5219d6[_0x21eab0(0x2c1)] = _0x21eab0(0x30c), _0x5219d6['anchorX'] = _0x5219d6[_0x21eab0(0x2ff)] = 0.5, _0x5219d6[_0x21eab0(0x2c3)](0x370, 0xaa), _0x5219d6[_0x21eab0(0x2d6)]['mouseWheelEnable'] = ![], _0x5219d6[_0x21eab0(0x2d6)]['mouseEnabled'] = ![], _0x5219d6[_0x21eab0(0x2d6)]['touchScrollEnable'] = ![], _0x5219d6['itemRender'] = _0x3d38bf, _0x5219d6[_0x21eab0(0x2d3)] = new Laya[(_0x21eab0(0x296))](this, this[_0x21eab0(0x30d)]), this[_0x21eab0(0x2c6)][_0x21eab0(0x286)](_0x5219d6), _0x5219d6[_0x21eab0(0x2b3)](this[_0x21eab0(0x2c6)][_0x21eab0(0x26d)] / 0x2, this[_0x21eab0(0x2c6)][_0x21eab0(0x2b2)] / 0x2);
                let _0x1f3cb4 = _0x18937c[_0x21eab0(0x24b)]()[_0x21eab0(0x2d9)]();
                if (!_0x1f3cb4[_0x21eab0(0x22d)])
                    return;
                let _0xf84de4 = JSON[_0x21eab0(0x20e)](JSON[_0x21eab0(0x257)](_0x1f3cb4));
                _0xf84de4 = _0xf84de4['concat'](_0xf84de4['slice'](0x0, 0x4)), _0x5219d6[_0x21eab0(0x2e6)] = _0xf84de4, Laya[_0x21eab0(0x1f9)][_0x21eab0(0x2dd)](0x1, this, this[_0x21eab0(0x2de)]), Laya[_0x21eab0(0x1f9)][_0x21eab0(0x30e)](0x64, this, () => {
                    _0x5219d6['refresh']();
                }), this[_0x21eab0(0x2c6)][_0x21eab0(0x28a)] = ![], this[_0x21eab0(0x2c6)]['setSize'] = this['setSize']['bind'](this['_scrollList']);
            }
            return this[_0x21eab0(0x2c6)];
        }
        [_0x586fed(0x30d)](_0x1ed301, _0x5205f3) {
            const _0x501573 = _0x586fed;
            let _0x546d53 = _0x1ed301[_0x501573(0x2e4)], _0x192ec8 = _0x1ed301['getChildByName'](_0x501573(0x2c0)), _0x12b8f6 = _0x192ec8[_0x501573(0x2e5)];
            _0x192ec8[_0x501573(0x27a)] = _0x546d53[_0x501573(0x2c2)];
            this['_scrollList'][_0x501573(0x308)][0x3] && (_0x1ed301[_0x501573(0x2c3)](0xdc, 0xaa), _0x1ed301['img'][_0x501573(0x2c3)](0xc8, 0x96), _0x12b8f6[_0x501573(0x2c3)](0xc8, 0x96), _0x1ed301[_0x501573(0x1ff)](0x1, 0x1), _0x1ed301[_0x501573(0x1ff)](0x1, 0x1), _0x12b8f6[_0x501573(0x1ff)](0x1, 0x1));
            _0x1ed301[_0x501573(0x2df)](), _0x192ec8[_0x501573(0x2df)](), _0x1ed301['on'](Laya[_0x501573(0x28e)]['MOUSE_OVER'], _0x1ed301, () => {
                _0x1ed301['zOrder'] = 0x64;
            }), _0x1ed301['on'](Laya[_0x501573(0x28e)]['MOUSE_OUT'], _0x1ed301, () => {
                _0x1ed301['zOrder'] = _0x5205f3;
            }), _0x192ec8['on'](Laya[_0x501573(0x28e)][_0x501573(0x2e0)], _0x1ed301, () => {
                const _0x5e1c12 = _0x501573;
                _0x192ec8[_0x5e1c12(0x1ff)](_0x192ec8['scaleX'] + 0.1, _0x192ec8['scaleY'] + 0.1), this[_0x5e1c12(0x2e2)]();
            }), _0x192ec8['on'](Laya[_0x501573(0x28e)][_0x501573(0x2e1)], _0x1ed301, () => {
                const _0x37cee7 = _0x501573;
                _0x192ec8[_0x37cee7(0x1ff)](_0x192ec8['scaleX'] - 0.1, _0x192ec8[_0x37cee7(0x30f)] - 0.1), Laya[_0x37cee7(0x1f9)][_0x37cee7(0x2dd)](0x1, this, this['loopList']);
            }), _0x192ec8['on'](Laya[_0x501573(0x28e)][_0x501573(0x28f)], _0x1ed301, _0x17ac03 => {
                const _0x4b5eea = _0x501573;
                _0x17ac03[_0x4b5eea(0x290)](), _0x18937c[_0x4b5eea(0x24b)]()['navigate']('GAME', _0x4b5eea(0x2e3), _0x546d53['id']);
            });
            let _0x5cede2 = 0xc8;
            this[_0x501573(0x2c6)][_0x501573(0x308)][0x0] / 0xc8 > this[_0x501573(0x2c6)][_0x501573(0x308)][0x1] / 0x96 ? _0x5cede2 = this[_0x501573(0x2c6)]['sizeArr'][0x0] / 0xc8 : _0x5cede2 = this['_scrollList'][_0x501573(0x308)][0x1] / 0x96;
            let _0x375447 = 0xc8, _0x464a5d = 0xc8 * this['_scrollList'][_0x501573(0x308)][0x1] / this[_0x501573(0x2c6)][_0x501573(0x308)][0x0];
            _0x1ed301[_0x501573(0x2c3)](_0x375447 + 0x14, _0x464a5d + 0x14), _0x12b8f6[_0x501573(0x2c3)](_0x375447, _0x464a5d), !this['_scrollList']['sizeArr'][0x2] ? _0x1ed301['img'][_0x501573(0x2c3)](_0x375447, _0x464a5d) : (leftAd['size'](0xc8 * _0x5cede2, 0x96 * _0x5cede2), rightAd['size'](0xc8 * _0x5cede2, 0x96 * _0x5cede2)), _0x192ec8[_0x501573(0x2b3)](_0x1ed301['width'] / 0x2, _0x1ed301[_0x501573(0x2b2)] / 0x2), _0x12b8f6[_0x501573(0x2b3)](_0x192ec8[_0x501573(0x26d)] / 0x2, _0x192ec8[_0x501573(0x2b2)] / 0x2);
        }
        ['endAni']() {
            const _0x235c96 = _0x586fed;
            Laya[_0x235c96(0x1f9)][_0x235c96(0x2e8)](this, this[_0x235c96(0x2de)]);
        }
        [_0x586fed(0x2de)]() {
            const _0x4412a1 = _0x586fed;
            if (!this['_scrollList']) {
                this[_0x4412a1(0x2e2)]();
                return;
            }
            let _0xafbd08 = this['_scrollList']['getChildByName']('listAd');
            _0xafbd08[_0x4412a1(0x2d6)][_0x4412a1(0x227)] += 0x1, _0xafbd08[_0x4412a1(0x2d6)][_0x4412a1(0x227)] >= _0xafbd08[_0x4412a1(0x2d6)][_0x4412a1(0x2e7)] && (_0xafbd08[_0x4412a1(0x2d6)][_0x4412a1(0x227)] = 0x0);
        }
        [_0x586fed(0x310)](_0x4045f8) {
            const _0x3355d4 = _0x586fed;
            if (_0x4045f8[_0x3355d4(0x2c1)] == _0x3355d4(0x2fb)) {
                let _0x26a287 = _0x4045f8['getChildByName'](_0x3355d4(0x300)), _0x522206 = _0x4045f8[_0x3355d4(0x2b1)]('rightAdBg'), _0x10ac9b = _0x18937c[_0x3355d4(0x24b)]()[_0x3355d4(0x2d9)]();
                if (!_0x10ac9b[_0x3355d4(0x22d)])
                    return;
                let _0x4f6431 = JSON[_0x3355d4(0x20e)](JSON[_0x3355d4(0x257)](_0x10ac9b));
                _0x26a287[_0x3355d4(0x2df)](), _0x522206[_0x3355d4(0x2df)](), _0x26a287[_0x3355d4(0x2b1)](_0x3355d4(0x303))[_0x3355d4(0x27a)] = _0x4f6431[0x0]['thumb'], _0x522206[_0x3355d4(0x2b1)]('rightAd')['skin'] = _0x4f6431[0x1]['thumb'], _0x26a287['on'](Laya['Event'][_0x3355d4(0x28f)], _0x4045f8, _0xaea2c0 => {
                    const _0x530fdf = _0x3355d4;
                    _0xaea2c0['stopPropagation'](), _0x18937c['getInstance']()[_0x530fdf(0x251)](_0x530fdf(0x298), _0x530fdf(0x2e3), _0x4f6431[0x0]['id']);
                }), _0x522206['on'](Laya[_0x3355d4(0x28e)]['MOUSE_DOWN'], _0x4045f8, _0x40bd73 => {
                    const _0x2e2567 = _0x3355d4;
                    _0x40bd73[_0x2e2567(0x290)](), _0x18937c[_0x2e2567(0x24b)]()[_0x2e2567(0x251)](_0x2e2567(0x298), _0x2e2567(0x2e3), _0x4f6431[0x1]['id']);
                });
            }
        }
        [_0x586fed(0x289)](_0x160fb5) {
            const _0x10f3a6 = _0x586fed;
            if (this[_0x10f3a6(0x2c1)] == '_box_adTwo0') {
                let _0x20b785 = this[_0x10f3a6(0x2b1)](_0x10f3a6(0x300)), _0x39d2d4 = this[_0x10f3a6(0x2b1)](_0x10f3a6(0x304));
                _0x39d2d4[_0x10f3a6(0x2b3)](_0x20b785[_0x10f3a6(0x26d)] + _0x160fb5, 0x0), this[_0x10f3a6(0x26d)] = _0x20b785[_0x10f3a6(0x26d)] + _0x39d2d4['width'] + _0x160fb5, this[_0x10f3a6(0x307)] = _0x160fb5;
            }
        }
    }
}());
function _0x3c7a(_0xd01a33, _0x3c5cf2) {
    const _0x5e378b = _0x5e37();
    return _0x3c7a = function (_0x3c7a42, _0x5bbf4a) {
        _0x3c7a42 = _0x3c7a42 - 0x1d8;
        let _0x425625 = _0x5e378b[_0x3c7a42];
        return _0x425625;
    }, _0x3c7a(_0xd01a33, _0x3c5cf2);
}
function _0x5e37() {
    const _0x110dc3 = [
        'stopPropagation',
        'showBanner',
        'hideBanner',
        'hideSplash',
        'createNoVideo',
        'loader',
        'Handler',
        'create',
        'GAME',
        'LOGO',
        'puzzlegamestartup',
        'createLoading',
        'then',
        'Prefab',
        'Script',
        'Box',
        'laya/pages/Prefab/NoVideo.prefab',
        'Sprite',
        'Sprite,spr_tip,spr_tip',
        'spr_tip',
        'Rect',
        'Rect(NoVideo)',
        'Label',
        'middle',
        'VIDEO',
        '#ffffff',
        'Label(NoVideo)',
        'No\x20Video\x20Available',
        'Click\x20anywhere\x20to\x20close',
        'ani1',
        'onEnable',
        'owner',
        'left',
        'getChildByName',
        'height',
        'pos',
        'CLICK',
        'closePer',
        'closeNoVideo',
        'noVideoPer',
        'addComponent',
        'showNoVideo',
        'Box,box_clickLayer',
        'box_clickLayer',
        'json',
        'loadingPer',
        'showLoading',
        'createList',
        'img',
        'name',
        'thumb',
        'size',
        'List',
        'itemRender',
        '_scrollList',
        'laya/pages/prefab/scrollList.prefab',
        'scrollAdList',
        'Image,img_ListBg',
        'di2.png',
        '30,\x2030,\x2030,\x2030',
        'Box(scrollList)',
        'di1.png',
        '30,30,30,30',
        'Image(scrollList)',
        'imgArr',
        'sizeTran',
        'img_ListBg',
        'renderHandler',
        'itemRenderFun',
        'clearRes',
        'scrollBar',
        'mouseWheelEnable',
        'touchScrollEnable',
        'getForgames',
        'listArray',
        'concat',
        'centerX',
        'frameLoop',
        'loopList',
        'offAll',
        'MOUSE_OVER',
        'MOUSE_OUT',
        'endAni',
        'MORE',
        'dataSource',
        'mask',
        'array',
        'max',
        'clearAll',
        'Tween',
        'checkPoints',
        'onDisable',
        'getComponent',
        'Box,box_adTwo',
        'laya/pages/prefab/box_adTwo.prefab',
        'img_ad0',
        'Image,img_adImg',
        'img_adImg',
        'img_ad1',
        'Image(box_adTwo)',
        'img_ad0Ad',
        'img_ad1Ad',
        'img_ad0AdMask',
        'img_ad1AdMask',
        'spaceNum',
        '_box_adTwo',
        'platform',
        '_box_adTwo0',
        'inst',
        '_inst',
        'anchorX',
        'anchorY',
        'leftAdBg',
        'sizeGrid',
        'leftAdMask',
        'leftAd',
        'rightAdBg',
        'rightAdMask',
        'rightAd',
        'spaceXNum',
        'sizeArr',
        'centerY',
        'imgMask',
        'hScrollBarSkin',
        'listAd',
        'renderADHandler',
        'once',
        'scaleY',
        'visibleChangeFun',
        '236876VvKQjG',
        '236300JFtoWd',
        '383385yIXSni',
        '943132uDmiqd',
        '5MFGKBW',
        '1447272qYoprF',
        '1491308ZzydLH',
        '3999984DTCdXY',
        'isMuted',
        'bePauseSound',
        'tryToResumeIntervalId',
        'isVisibilityMuted',
        'adShowing',
        'init',
        'musicAudio',
        'soundAudio',
        'document',
        'addEventListener',
        'mousedown',
        'tryToResumeAudioContext',
        'touchstart',
        'visibilitychange',
        'onVisibilitychange',
        'bind',
        'getContext',
        'onstatechange',
        'onMusicStatechange',
        'onSoundStatechange',
        'beEnabled',
        'musicVolume',
        'isFocusOn',
        'log',
        'Web\x20Audio\x20API',
        'timer',
        'renderingEnabled',
        'updateTimer',
        'pause',
        'physicsTimer',
        'visibilityState',
        'scale',
        'resume',
        'onDBInstanceMuted',
        'isSuspend',
        'bePauseMusic',
        '_music',
        'playMusic',
        'url',
        'removeEventListener',
        'muted',
        'suspend',
        'pauseSound',
        'pauseMusic',
        'stopAllNoLoop',
        'stopAll',
        'parse',
        'stopMusic',
        'stopSound',
        'stop',
        'playSound',
        'play',
        '_musicVolume',
        'AudioContext',
        'webkitAudioContext',
        'context',
        'state',
        'suspended',
        '_audioInstances',
        'values',
        'buffer',
        'source',
        'currentTime',
        'disconnect',
        'onended',
        'setup',
        'instance',
        'has',
        'get',
        '_stopSound',
        'downloadArrayBuffer',
        'value',
        'ended',
        'WebAudioEngine',
        'playBuffer',
        'playBuffer\x20error.\x20Exception:\x20',
        'load',
        'length',
        'setThreeD',
        'threeD',
        'createGain',
        'createPanner',
        'start',
        'createBufferSource',
        'setupPanning',
        'connect',
        'panner',
        'gain',
        'rolloffFactor',
        'destination',
        'createSoundInstance',
        'Decode\x20error.',
        'GET',
        'responseType',
        'arraybuffer',
        'onload',
        'status',
        'no\x20response',
        'onerror',
        'ontimeout',
        'onabort',
        'screen_',
        'action_',
        'to_',
        'prompt_',
        'needStartUp',
        'initData',
        'getInstance',
        '_instance',
        'mouseup',
        'onNavigate_',
        'touchend',
        'canNavigateActive_',
        'navigate',
        'getStorageSync',
        'LocalStorage',
        'getItem',
        'setStorageSync',
        'setItem',
        'stringify',
        'onblur',
        'onfocus',
        'showInterstitial',
        'stage',
        'focus',
        'canShowReward',
        'prompt',
        'No\x20Available\x20Video',
        'showReward',
        'Pls\x20watch\x20the\x20ad\x20completely,\x20so\x20that\x20you\x20can\x20claim\x20your\x20reward',
        'initList',
        'createElement',
        'div',
        'style',
        'cssText',
        'overflow:\x20hidden;word-break:\x20break-all;word-wrap:\x20break-word;font-family:siyuan;padding:10px\x2010px\x2010px\x2010px;min-height:20px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;',
        'body',
        'appendChild',
        'designHeight',
        'innerWidth',
        'innerHeight',
        'width',
        'inline',
        '-webkit-transform\x20',
        's\x20ease-in,\x20opacity\x20',
        's\x20ease-in',
        'opacity',
        'display',
        'none',
        'forgames',
        'slice',
        'floor',
        'createLogo',
        'Image',
        'skin',
        'yad.png',
        'zOrder',
        'yad',
        'showSplash',
        'SoundManager',
        'initialized_',
        'cnf.json',
        'startupByYad',
        'getAdPlatformType',
        'scrollList',
        'box_adTwo',
        'addChild',
        'bottom',
        'setSize',
        'setSpaceX',
        'visible',
        'en_GAMEDISTRIBUTION',
        'en_XIAOMI',
        'removeSelf',
        'Event',
        'MOUSE_DOWN'
    ];
    _0x5e37 = function () {
        return _0x110dc3;
    };
    return _0x5e37();
}