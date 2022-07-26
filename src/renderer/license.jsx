/* eslint-disable max-len */
import React from 'react';
import styles from './license.css';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';

import OpenBlockLogo from '../icon/logo-OpenBlockcc.svg';
import ScratchFoundationLogo from '../icon/logo-ScratchFoundation.svg';

// Insert new copyright information at the head of the array to add a new copyright notice
const copyrightInformations = [
    {
        id: 'OpenBlock.cc',
        logo: OpenBlockLogo,
        link: 'https://www.openblock.cc/',
        license: 'EULA'
    },
    {
        id: 'Scratch Foundation',
        link: 'https://www.scratchfoundation.org/',
        logo: ScratchFoundationLogo,
        license: 'BSD-3-Clause'
    }
];

const licenseContent = {
    'EULA': (
        <div className={styles.licenseContent}>
            <p>
                This End-User License Agreement (&quot;EULA&quot;) is a legal agreement
                between you and OpenBlock (ShenZheng) Technology Co., Ltd..
                Our EULA was created by for OpenBlockDesktopEE.
            </p>
            <p>
                This EULA agreement governs your acquisition and use of our OpenBlockDesktopEE
                software (&quot;Software&quot;) directly from OpenBlock (ShenZheng) Technology Co., Ltd.
                or indirectly through a OpenBlock (ShenZheng) Technology Co., Ltd.
                authorized reseller or distributor (a &quot;Reseller&quot;).
            </p>
            <p>
                Please read this EULA agreement carefully before completing the
                installation process and using the OpenBlockDesktopEE software.
                It provides a license to use the OpenBlockDesktopEE software
                and contains warranty information and liability disclaimers.
            </p>
            <p>
                If you are entering into this EULA agreement on behalf of a company or
                other legal entity, you represent that you have the authority to
                bind such entity and its affiliates to these terms and conditions.
                If you do not have such authority or if you do not agree with the terms
                and conditions of this EULA agreement, do not install or use the Software,
                and you must not accept this EULA agreement.
            </p>
            <p>
                This EULA agreement shall apply only to the Software supplied by
                OpenBlock (ShenZheng) Technology Co., Ltd.
                herewith regardless of whether other software is referred to or described herein.
                The terms also apply to any OpenBlock (ShenZheng) Technology Co., Ltd.
                updates, supplements, Internet-based services, and support services for
                the Software, unless other terms accompany those items on delivery.
                If so, those terms apply.
            </p>
            <h3>License Grant</h3>
            <p>
                OpenBlock (ShenZheng) Technology Co., Ltd. hereby grants you a personal,
                non-transferable, non-exclusive licence to use the OpenBlockDesktopEE
                software on your devices in accordance with the terms of this EULA agreement.
            </p>
            <p>
                You are permitted to load the OpenBlockDesktopEE software (for example a PC,
                laptop, mobile or tablet) under your control. You are responsible for
                ensuring your device meets the minimum requirements of
                the OpenBlockDesktopEE software.
            </p>
            <p>
                You are not permitted to:
            </p>
            <ul>
                <li>
                    Edit, alter, modify, adapt, translate or otherwise change the whole or
                    any part of the Software nor permit the whole or any part of
                    the Software to be combined with or become incorporated in any other software,
                    nor decompile, disassemble or reverse engineer the
                    Software or attempt to do any such things
                </li>
                <li>
                    Reproduce, copy, distribute, resell or otherwise use the Software for any
                    commercial purpose
                </li>
                <li>
                    Allow any third party to use the Software on behalf of or for the benefit
                    of any third party
                </li>
                <li>
                    Use the Software in any way which breaches any applicable local,
                    national or international law
                </li>
                <li>
                    use the Software for any purpose that OpenBlock (ShenZheng) Technology Co., Ltd.
                    considers is a breach of this EULA agreement
                </li>
            </ul>
            <h3>Intellectual Property and Ownership</h3>
            <p>
                OpenBlock (ShenZheng) Technology Co., Ltd. shall at all times retain ownership
                of the Software as originally downloaded by you and all subsequent downloads
                of the Software by you. The Software (and the copyright, and other intellectual
                property rights of whatever nature in the Software,
                including any modifications made thereto) are and shall remain the property of
                OpenBlock (ShenZheng) Technology Co., Ltd..
            </p>
            <p>
                OpenBlock (ShenZheng) Technology Co., Ltd. reserves the right to grant licences to
                use the Software to third parties.
            </p>
            <h3>Termination</h3>
            <p>
                This EULA agreement is effective from the date you first use the Software and
                shall continue until terminated. You may terminate it at any time upon written
                notice to OpenBlock (ShenZheng) Technology Co., Ltd..
            </p>
            <p>
                It will also terminate immediately if you fail to comply with any term of this
                EULA agreement. Upon such termination, the licenses granted by this EULA agreement
                will immediately terminate and you agree to stop all access and use of the Software.
                The provisions that by their nature continue and survive will survive any
                termination of this EULA agreement.
            </p>
            <h3>Governing Law</h3>
            <p>
                This EULA agreement, and any dispute arising out of or in connection with this
                EULA agreement, shall be governed by and construed in accordance with the laws of China.
            </p>
        </div>
    ),
    'MIT': (
        <div className={styles.licenseContent}>
            <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the &quot;Software&quot;), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
            </p>
            <p>
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
            </p>
            <p>
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
            </p>
        </div>
    ),
    'BSD-3-Clause': (
        <div className={styles.licenseContent}>
            <p>
                Redistribution and use in source and binary forms, with or without modification,
                are permitted provided that the following conditions are met:
            </p>
            <p>
                1. Redistributions of source code must retain the above copyright notice, this
                list of conditions and the following disclaimer.
            </p>
            <p>
                2. Redistributions in binary form must reproduce the above copyright notice, this
                list of conditions and the following disclaimer in the documentation and/or other
                materials provided with the distribution.
            </p>
            <p>
                3. Neither the name of the copyright holder nor the names of its contributors may be
                used to endorse or promote products derived from this software without specific
                prior written permission.
            </p>
            <p>
                THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND ANY
                EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
                OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
                SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
                INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
                TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
                OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
                IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
                IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
                SUCH DAMAGE.
            </p>
        </div>
    )
};

class LicenseElement extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClickTab'
        ]);
        this.state = {
            selectedTab: copyrightInformations[0].id
        };
    }

    handleClickLogo (e) {
        copyrightInformations.forEach(item => {
            if (item.id === e.currentTarget.alt) {
                window.open(item.link);
            }
        });
    }

    handleClickTab (e) {
        this.setState({selectedTab: e.currentTarget.id});
    }

    buildLicenseTabList () {
        return copyrightInformations.map(item => (
            <button
                key={item.id}
                id={item.id}
                className={classNames(styles.tab, {
                    [styles.isSelected]: this.state.selectedTab === item.id
                })}
                onClick={this.handleClickTab}
            >
                {item.id}
            </button>
        ));
    }

    buildLicenseContent () {
        return copyrightInformations.map(item => (
            <div
                key={item.id}
                className={classNames(styles.tabPanel, {
                    [styles.isSelected]: this.state.selectedTab === item.id
                })}
            >
                <img
                    alt={item.id}
                    className={styles.logo}
                    draggable={false}
                    src={item.logo}
                    onClick={this.handleClickLogo}
                />
                <h4>{item.license} License</h4>
                <h4>Copyright &copy; {item.id}</h4>
                {licenseContent[item.license]}
            </div>
        ));
    }

    render () {
        const tabList = this.buildLicenseTabList();
        const content = this.buildLicenseContent();

        return (
            <div className={styles.licenseBox}>
                <div className={styles.tabList}>
                    {tabList}
                </div>
                <div className={styles.tabs}>
                    {content}
                </div>
            </div>
        );
    }
}

export default <LicenseElement />;
