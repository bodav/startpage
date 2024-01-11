FROM node:current-alpine

ENV DEVCONTAINER=true

RUN apk add git zsh zsh-vcs

RUN sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
RUN sh -c "git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions"
RUN sh -c "git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting"
RUN sh -c "git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
RUN sh -c "wget https://raw.githubusercontent.com/bodav/dotfiles/main/zsh/.p10k.zsh -O ~/.p10k.zsh"
RUN sh -c "wget https://raw.githubusercontent.com/bodav/dotfiles/main/zsh/.zshrc -O ~/.zshrc"